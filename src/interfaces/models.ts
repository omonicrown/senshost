import { ActionType, Status } from "../enums/status"

export interface AuthResponseModel {
    identityToken: string;
    account: Account;
}

export interface Account {
    username: string;
    email: string;
    password: string;
    id: string;
    creationDate: Date;
    name?: string;
}

export interface ActionModel {
    name: string;
    type: ActionType;
    properties: string
    accountId: string;
    id: string;
    creationDate: string;
}

export interface HttpBasicAuth {
    username: string;
    password: string;
}

export interface PositiveResponse {
    code: 200 | 400 | 403 | 404;
    description: string;
}

export interface SensorModel {
    name: string;
    deviceId: string;
    dataType: number;
    id?: string;
    creationDate?: Date;
    sensorDataType?: string;
}

export interface ActuatorModel {
    deviceId?: string;
    accountId?: string;
    name: string;
    type: number
    propertise: { ON: "", OFF: "", message: "", value: "" };
    id: string;
    creationDate?: Date;
}

export interface SensorValue {
    fieldID: string;
    value: string;
    id: string;
    creationDate: string
}

export interface GroupModel {
    accountId: string;
    name: string;
    status: Status;
    id?: string;
    creationDate?: string;
}

export interface DashboardModel {
    name: string;
    description: string;
    groupId: string;
    accountId: string;
    id: string;
    creationDate: string;
}

export interface DashboardItemModel {
    name: string;
    type?: number;
    property?: string;
    possition?: string;
    dashboardId: string;
    id?: string,
    creationDate?: string;
}

export interface UserModel {
    accountId: string;
    groupId: string;
    name: string;
    email: string;
    password: string;
    id: string;
    creationDate: string;

}

export interface DeviceModel {
    name: string;
    type: number;
    connectionId: string;
    accountId: string;
    fields: Array<SensorModel>;
    groupId: string;
    actuators: Array<ActuatorModel>;
    id: string;
    creationDate: Date;
}