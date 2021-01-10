import { Modal, ModalProps } from '@sebgroup/react-components/dist/Modal/Modal';
import { AxiosResponse } from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardApis } from '../../apis/dashboardApis';
import { initialState } from '../../constants';
import { DashboardItemModel, DashboardModel } from '../../interfaces/models';
import { States } from '../../interfaces/states';
import { Dispatch } from "redux";
import { History } from "history";

import Gauge from "../shared/Gauge";
import Tank from "../shared/Tank";
import LineChart from "../shared/LineChart";

import { toggleNotification } from '../../actions';
import { NotificationProps } from '@sebgroup/react-components/dist/notification/Notification';
import { match, useHistory, useRouteMatch } from 'react-router';
import { Breadcrumb } from '@sebgroup/react-components/dist/Breadcrumb/Breadcrumb';
import { Button } from '@sebgroup/react-components/dist/Button';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import { HomeRoutes } from '../../enums/routes';
import PortalComponent from '../shared/Portal';

import AddDashboardItem from "./modals/AddDashboardItem";

interface BreadcrumbProps {
    list: Array<string>;
    activeIndex: number;
}

const DashboardItem: React.FC = () => {
    const [dashboardItems, setDashboardItems] = React.useState<Array<DashboardItemModel>>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [fetching, setFetching] = React.useState<boolean>(false);
    const [modalProps, setModalProps] = React.useState<ModalProps>({ ...initialState, size: 'modal-lg' });

    const [dashboard, setDashboard] = React.useState<DashboardModel>(null);
    const [dashboardItem, setDashboardItem] = React.useState<DashboardItemModel>(null);

    const match: match = useRouteMatch();
    const history: History = useHistory();

    const dashboardId: string = React.useMemo(() => match?.params["id"], [match?.params]);

    const breadcrumbList: Array<string> = React.useMemo(() => {
        return ['Dashboard list', dashboard?.name || dashboardId];
    }, [dashboardId, dashboard]);

    const onEditDashboardItem = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, dashboardItem: DashboardItemModel) => {
        setDashboardItem(dashboardItem);
        setModalProps({ ...modalProps, toggle: true });
    }, [modalProps]);

    const onDeleteDashboardItem = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, dashboardItem: DashboardItemModel) => {
        setDashboardItem(dashboardItem);
        setModalProps({ ...modalProps, toggle: true });
    }, [modalProps]);

    const onAddDashboardItem = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setDashboardItem(null);
        setModalProps({ ...modalProps, toggle: true });
    }, [modalProps]);

    const onBreadcrumbClick = React.useCallback((i: number) => {
        if (i === 0) {
            history.push(HomeRoutes.Dashboard.toString());
        }
    }, [history]);

    const arrayTemp: Array<number> = React.useMemo(() => [1, 2, 3, 4], []);

    const authState = useSelector((states: States) => states.auth);
    const dispatch: Dispatch = useDispatch();

    const onCancel = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setModalProps({ ...modalProps, toggle: false });
    }, [modalProps]);

    const handleSave = React.useCallback((e: React.FormEvent<HTMLFormElement>, dashboardItem: DashboardItemModel) => {
        setLoading(true);
        DashboardApis.addDashboardItem({ ...dashboardItem, dashboardId: dashboardId })
            .then((response: AxiosResponse) => {
                setDashboardItems([...dashboardItems, response.data]);

                const notification: NotificationProps = {
                    theme: "success",
                    title: "Dashboard item added",
                    message: `Dashboard item added successfully`,
                    toggle: true,
                    onDismiss: () => { }
                };

                dispatch(toggleNotification(notification));

                setModalProps({ ...modalProps, toggle: false });
            }).finally(() => {
                setLoading(false);
            });
    }, [dashboardItems, dashboardId]);

    React.useEffect(() => {
        setFetching(true);
        DashboardApis.getDashboardItemsByDashboardId(dashboardId)
            .then((response: AxiosResponse<Array<DashboardItemModel>>) => {
                if (response.data) {
                    setDashboardItems(response.data);
                }
            })
            .finally(() => {
                setFetching(false);
            });

        DashboardApis.getDashboardById(dashboardId)
            .then((response: AxiosResponse<DashboardModel>) => {
                if (response.data) {
                    setDashboard(response.data);
                }
            })
            .finally(() => {
                setFetching(false);
            });

    }, [dashboardId]);

    return (
        <div className="dashboard-item-container">
            <Breadcrumb className="dashboard-breadcrumb" id="2" list={breadcrumbList} onClick={onBreadcrumbClick} />
            <div className="d-flex flex-sm-row flex-column dashboards-holder">
                {fetching ? arrayTemp.map((key: number) =>
                    <div className="card dashboard-card" key={`loader${key}`}>
                        <div className="skeleton-loader skeleton-loader-fill rounded " />
                    </div>
                ) :
                    dashboardItems.length ?
                        dashboardItems?.map((dashboardItem: DashboardItemModel, i: number) =>
                            <div className="card dashboard-card" key={dashboardItem?.id}>
                                <h4 className="card-header">
                                    {dashboardItem.name}
                                </h4>
                                <div className="card-body">
                                    <div className="chart-holder">
                                        {dashboardItem?.type === 0 &&
                                            <Tank type={i % 2 === 0 ? "tears" : 'rectangle'} data={[0.9]} />
                                        }
                                         {dashboardItem?.type === 1 &&
                                            <Gauge data={[0.9]} />
                                        }
                                        {
                                            dashboardItem?.type === 3 &&
                                            <LineChart data={[0.9]} />
                                        }
                                    </div>

                                    <h5 className="card-subtitle text-muted">{dashboardItem.type}</h5>
                                    <p className="card-text">{dashboardItem?.type}.</p>
                                    <Button label="Edit" theme="secondary" className="card-link" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onEditDashboardItem(e, dashboardItem)} />
                                    <Button label="Delete" theme="secondary" className="card-link" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onDeleteDashboardItem(e, dashboardItem)} />
                                </div>
                                <div className="card-footer text-muted">
                                    Created: <FormattedDate value={dashboardItem?.creationDate} year="numeric"
                                        month="long"
                                        day="2-digit" />
                                </div>
                            </div>
                        ) :
                        <div className="card dashboard-card empty-card">
                            <span className="text-primary text-primary">
                                Dashboard empty
                            </span>
                        </div>

                }

                <div className="card dashboard-card">
                    <Button disabled={loading || fetching} className="card-body" theme="outline-primary" label="Add" size="sm" name="btnAdd" onClick={onAddDashboardItem} />
                </div>
            </div>

            <PortalComponent>
                <Modal
                    {...modalProps}
                    onDismiss={() => setModalProps({ ...modalProps, toggle: false })}
                    header={<h4>{dashboardItem?.id ? `Edit ${dashboardItem?.name}` : 'Add Dashboard Item'}</h4>}
                    body={
                        modalProps?.toggle ?
                            <AddDashboardItem
                                onSave={handleSave}
                                onCancel={onCancel}
                                loading={loading}
                                dashboardItem={dashboardItem}
                                authState={authState}
                            />
                            : null
                    }
                />
            </PortalComponent>

            {/* <div className="row no-gutters">
                <div className="col-sm-3 col-12">
                    <div className="card">
                        <div className="card-header">
                            header here
                        </div>
                        <div className="card-body">
                            <Gauge type="rectangle" data={[0.6]} />
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3 col-12">
                    <div className="gadgetPanel">
                        <Gauge type="circle" data={[0.5]} />
                    </div>
                </div>

                <div className="col-sm-3 col-12">
                    <div className="gadgetPanel">
                        <Gauge type="tears" data={[0.3]} />
                    </div>
                </div>
                <div className="col-sm-3 col-12">
                    <div className="gadgetPanel">
                        <Gauge type="tears" data={[0.3]} />
                    </div>
                </div>
            </div>
     */}
        </div >
    );
};

export default DashboardItem;