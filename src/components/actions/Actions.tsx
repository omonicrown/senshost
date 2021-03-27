import React from "react";

import { Pagination } from "@sebgroup/react-components/dist/Pagination";

import PortalComponent from "../shared/Portal";

import { SharedProps } from "../home/Home";
import { Modal, ModalProps } from "@sebgroup/react-components/dist/Modal/Modal";

import { States, AuthState } from "../../interfaces/states";
import { useSelector, useDispatch } from "react-redux";
import { AxiosResponse, AxiosError } from "axios";
import { ActionModel } from "../../interfaces/models";
import { Column, Table, DataItem, TableRow, TableHeader, PrimaryActionButton, FilterProps, FilterItem, ActionLinkItem } from "@sebgroup/react-components/dist/Table/Table";
import { DropdownItem, Dropdown } from "@sebgroup/react-components/dist/Dropdown/Dropdown";
import configs from "../../configs";
import { Button } from "@sebgroup/react-components/dist/Button";


import { ACTIONTYPES, initialState } from "../../constants";
import { toggleNotification } from "../../actions";
import { NotificationProps } from "@sebgroup/react-components/dist/notification/Notification";

import { useHistory } from "react-router";
import { Dispatch } from "redux";
import { History } from "history";
import PageTitle from "../shared/PageTitle";
import { ActionApis } from "../../apis/actionApis";

import AddAndEditActionModal from "./modals/AddAndEditActionModal";
import { Loader } from "@sebgroup/react-components/dist/Loader";

export interface ActionHolderProps extends SharedProps {
}

interface ActionDisplayProps extends ActionModel {
    actionType?: string;
}

const ActionHolder: React.FunctionComponent<ActionHolderProps> = (props: ActionHolderProps): React.ReactElement<void> => {
    const authState: AuthState = useSelector((states: States) => states?.auth);
    // actions
    const dispatch: Dispatch = useDispatch();

    const [paginationValue, setPagination] = React.useState<number>(1);
    const [actions, setActions] = React.useState<Array<ActionDisplayProps>>(null);
    const [action, setAction] = React.useState<ActionDisplayProps>({ name: "", id: null, properties: "" } as ActionDisplayProps);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [paginationSize, setPaginationSize] = React.useState<number>(0);


    const [selectedStatus, setSelectedStatus] = React.useState<DropdownItem>(null);

    const [modalProps, setModalProps] = React.useState<ModalProps>({ ...initialState });
    const [modalDeleteActionProps, setModalDeleteActionProps] = React.useState<ModalProps>({ ...initialState });

    const [actionViewModalProps, setActionViewModalProps] = React.useState<ModalProps>({ ...initialState });
    const [filters, setFilters] = React.useState<Array<FilterItem>>([{ accessor: 'type', filters: [] }]);


    const columns: Array<Column> = React.useMemo((): Array<Column> => [
        {
            label: "Name",
            accessor: "name"
        },
        {
            label: "Type",
            accessor: "actionType"
        },
        {
            label: "Type",
            accessor: "type",
            isHidden: true
        },
        {
            label: "Properties",
            accessor: "properties",
        },
        {
            label: "Id",
            accessor: "id",
            isHidden: true
        },
    ], []);

    // memos
    const actionTypes: Array<DropdownItem> = [{ label: "Please select", value: null }, ...ACTIONTYPES];

    const data: Array<DataItem> = React.useMemo(() => actions?.map((action: ActionDisplayProps): ActionDisplayProps => {
        const newActionType: string = actionTypes?.find((item: DropdownItem) => item?.value === action.type)?.label;
        return ({ ...action, actionType: newActionType, accountId: authState?.auth?.account?.name });
    }), [actions, actionTypes]);

    const filterProps: FilterProps = React.useMemo(() => ({
        onAfterFilter: (rows: Array<TableRow>) => {
            setPaginationSize(rows?.length);
        },
        filterItems: filters,
    }), [filters]);

    const primaryButton: PrimaryActionButton = React.useMemo(() => ({
        label: "View",
        onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, selectedRow: TableRow) => {
            setAction({
                accountId: selectedRow['accountId'],
                name: selectedRow["name"],
                type: selectedRow["type"],
                id: selectedRow["id"],
                creationDate: selectedRow["creationDate"],
                properties: selectedRow["properties"]
            });

            setActionViewModalProps({ ...actionViewModalProps, toggle: true })
        },
    }), [actionViewModalProps]);


    const actionLinks: Array<ActionLinkItem> = React.useMemo(() => [
        {
            label: "Edit", onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, selectedRow: TableRow) => {
                setAction({
                    accountId: selectedRow['accountId'],
                    name: selectedRow["name"],
                    type: selectedRow["type"],
                    id: selectedRow["id"],
                    creationDate: selectedRow["creationDate"],
                    properties: selectedRow["properties"]
                });

                setModalProps({ ...modalProps, toggle: true });
            }
        },
        {
            label: "Delete", onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, selectedRow: TableRow) => {
                setAction({
                    accountId: selectedRow['accountId'],
                    name: selectedRow["name"],
                    type: selectedRow["type"],
                    id: selectedRow["id"],
                    creationDate: selectedRow["creationDate"],
                    properties: selectedRow["properties"]
                });

                setModalDeleteActionProps({ ...modalDeleteActionProps, toggle: true });
            }
        },
    ], [modalDeleteActionProps, modalProps]);

    // callbacks
    const onAddAction = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // add 
        setModalProps({ ...modalProps, toggle: true });
    }, []);

    const onCancel = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setModalProps({ ...modalProps, toggle: false });
        setAction({ name: "", id: null } as ActionModel);
    }, [modalProps, setAction]);

    const onDismissDeleteAction = React.useCallback(() => {
        setAction({ name: "", id: null } as ActionModel);
        setModalDeleteActionProps({ ...modalDeleteActionProps, toggle: false });
    }, [modalDeleteActionProps]);

    const handleDeleteGroup = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setLoading(true);

        ActionApis.deleteAction(action?.id)
            .then((response: AxiosResponse) => {
                const notification: NotificationProps = {
                    theme: "success",
                    title: "Action deleted",
                    message: `Action deleted successfully`,
                    toggle: true,
                    onDismiss: () => { }
                };
                const indexOfGroupTobeDeleted: number = actions?.findIndex((newAction: ActionModel) => newAction?.id === action?.id);
                const updatedActions = [
                    ...actions?.slice(0, indexOfGroupTobeDeleted),
                    ...actions?.slice(indexOfGroupTobeDeleted + 1)
                ];

                dispatch(toggleNotification(notification));

                setActions(updatedActions);
                setAction({ name: "", id: null } as ActionModel);
            })
            .finally(() => {
                setModalDeleteActionProps({ ...modalDeleteActionProps, toggle: false });
                setLoading(false);
            });
    }, [action, setModalDeleteActionProps]);

    const handleSave = React.useCallback((e: React.FormEvent<HTMLFormElement>, newAction: ActionModel) => {
        setLoading(true);
        if (newAction?.id) {
            ActionApis.updateAction(newAction)
                .then((response: AxiosResponse<ActionModel>) => {
                    if (response.data) {
                        const notification: NotificationProps = {
                            theme: "success",
                            title: "Group updated",
                            message: `Group updated successfully`,
                            toggle: true,
                            onDismiss: () => { }
                        };

                        dispatch(toggleNotification(notification));
                        const updatedActions: Array<ActionDisplayProps> = actions?.map((action: ActionDisplayProps) => {
                            if (action?.id === action?.id) {
                                return response?.data;
                            }

                            return action;
                        })
                        setActions(updatedActions);
                    }
                })
                .finally(() => {
                    setAction({ name: "", id: null } as ActionModel);
                    setModalProps({ ...modalProps, toggle: false });
                    setLoading(false);
                });
        } else {
            ActionApis.createAction({ ...newAction, accountId: authState?.auth?.account?.id })
                .then((response: AxiosResponse<ActionModel>) => {
                    if (response.data) {
                        const notification: NotificationProps = {
                            theme: "success",
                            title: "Action added",
                            message: `Action added successfully`,
                            toggle: true,
                            onDismiss: () => { }
                        };

                        dispatch(toggleNotification(notification));
                        setActions([...actions, response.data]);
                    }
                })
                .finally(() => {
                    setAction({ name: "", id: null } as ActionModel);
                    setModalProps({ ...modalProps, toggle: false });
                    setLoading(false);
                });
        }
    }, [modalProps, setActions, setModalProps, setAction]);


    const onDismissActionModal = React.useCallback(() => {
        setAction({ name: "", id: null } as ActionModel);
        setModalProps({ ...modalProps, toggle: false });
    }, [setModalProps, modalProps]);


    React.useEffect(() => {
        ActionApis.getActionsByAccountId(authState?.auth?.account?.id)
            .then((response: AxiosResponse<Array<ActionModel>>) => {
                setActions(response?.data)
            });
    }, []);


    return (
        <div className="actions-container">
            <PageTitle title="Actions" />
            <div className="actions-holder">
                <div className="table-filter-and-control-holder d-flex flex-sm-row flex-column">
                    <Dropdown
                        placeholder="Filter By Status"
                        list={actionTypes}
                        selectedValue={selectedStatus}
                        onChange={(value: DropdownItem) => setSelectedStatus(value)}
                    />
                    <Button label="Add" id="addBtn" size="sm" theme="outline-primary" title="Add" onClick={onAddAction} />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <Table
                                    columns={columns}
                                    data={data}
                                    offset={configs.tablePageSize}
                                    currentpage={paginationValue}
                                    primaryActionButton={primaryButton}
                                    filterProps={filterProps}
                                    actionLinks={actionLinks}
                                    footer={data?.length ?
                                        <Pagination value={paginationValue} onChange={setPagination} size={paginationSize} useFirstAndLast={true} />
                                        : null}
                                    sortProps={{
                                        onAfterSorting: (rows: Array<TableRow>, sortByColumn: TableHeader) => { },
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PortalComponent>
                <Modal
                    {...modalProps}
                    onDismiss={onDismissActionModal}
                    header={modalProps?.toggle ? <h3>{action?.id ? 'Edit action' : 'Create action'}</h3> : null}
                    body={
                        modalProps?.toggle ?
                            <AddAndEditActionModal
                                actionTypes={actionTypes}
                                onSave={handleSave}
                                onCancel={onCancel}
                                loading={loading}
                                action={action} />
                            : null
                    }
                />
                {/* <Modal
                    {...groupDetailsModalProps}
                    onDismiss={onDismissViewGroupDetail}
                    header={groupDetailsModalProps?.toggle ? <h3>Group: {group?.name}'s Users</h3> : null}
                    body={
                        groupDetailsModalProps ?
                            <GroupDetails
                                onCancel={onCancelGroupDetailModal}
                                group={group}
                                toggle={groupDetailsModalProps?.toggle}
                            />
                            : null
                    }
                /> */}
                <Modal
                    {...modalDeleteActionProps}
                    onDismiss={onDismissDeleteAction}
                    header={modalDeleteActionProps?.toggle ? <h4>Delete {action?.name} ?</h4> : null}
                    body={
                        modalDeleteActionProps?.toggle ?
                            <p>Are you sure you want to delete this ?</p>
                            : null
                    }
                    footer={
                        modalDeleteActionProps?.toggle ?
                            <div className="controls-holder d-flex flex-sm-row flex-column">
                                <Button label="Cancel" disabled={loading} theme="outline-primary" onClick={onDismissDeleteAction} />
                                <Button label="Delete" theme="danger" onClick={handleDeleteGroup}>
                                    {<Loader toggle={loading} size='sm' />}
                                </Button>
                            </div>
                            : null
                    }
                />
            </PortalComponent>

        </div>
    );

};

export default ActionHolder;