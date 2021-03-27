import React from "react";

export enum icontypesEnum {
    BARS = "BARS",
    PREVIOUS = "PREVIOUS",
    GROUPS = "GROUPS",
    USER = "USER",
    USERS = "USERS",
    NEXT = "NEXT",
    DEVICES = "DEVICES",
    ACTUATORS = "ACTUATORS",
    ANGLE_UP = "ANGLE_UP",
    ANGLE_DOWN = "ANGLE_DOWN",
    DASHBAORD = "DASHBAORD",
    COG = "COG",
    ADD = "ADD",
    TRASH = "TRASH",
    ENVELOPE = "ENVELOPE",
    PENCIL = "PENCIL",
    ACTIONS = "ACTIONS"
}

interface SvgElementProps {
    type: icontypesEnum;
    onClick?: (e: React.MouseEvent<SVGElement>) => void;
}


export const SvgElement: React.FunctionComponent<SvgElementProps> = (props: SvgElementProps): React.ReactElement<void> => {
    switch (props.type) {
        case icontypesEnum.BARS:
            return <svg onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M442 114H6a6 6 0 0 0-6-6V84a6 6 0 0 0 6-6h436a6 6 0 0 0 6 6v24a6 6 0 0 0-6 6zm0 160H6a6 6 0 0 0-6-6v-24a6 6 0 0 0 6-6h436a6 6 0 0 0 6 6v24a6 6 0 0 0-6 6zm0 160H6a6 6 0 0 0-6-6v-24a6 6 0 0 0 6-6h436a6 6 0 0 0 6 6v24a6 6 0 0 0-6 6z" /></svg>;
        case icontypesEnum.PREVIOUS:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M153.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L192.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L153 264.5c-4.6-4.7-4.6-12.3.1-17zm-128 17l117.8 116c4.7 4.7 12.3 4.7 17 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17L64.7 256l102.2-100.4c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L25 247.5c-4.6 4.7-4.6 12.3.1 17z" /></svg>;
        case icontypesEnum.NEXT:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z" /></svg>;
        case icontypesEnum.DEVICES:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.823 0-16-7.178-16-16V80c0-8.822 7.177-16 16-16h416m0-32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-336 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm288-148v-24a6 6 0 0 1-6-6H198a6 6 0 0 1-6 6v24a6 6 0 0 1 6 6h212a6 6 0 0 1 6-6zm0 96v-24a6 6 0 0 1-6-6H198a6 6 0 0 1-6 6v24a6 6 0 0 1 6 6h212a6 6 0 0 1 6-6zm0 96v-24a6 6 0 0 1-6-6H198a6 6 0 0 1-6 6v24a6 6 0 0 1 6 6h212a6 6 0 0 1 6-6z" /></svg>;
        case icontypesEnum.ACTUATORS:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M506 114H134a6 6 0 0 0-6-6V84a6 6 0 0 0 6-6h372a6 6 0 0 0 6 6v24a6 6 0 0 0-6 6zm6 154v-24a6 6 0 0 1-6-6H134a6 6 0 0 1-6 6v24a6 6 0 0 1 6 6h372a6 6 0 0 1 6-6zm0 160v-24a6 6 0 0 1-6-6H134a6 6 0 0 1-6 6v24a6 6 0 0 1 6 6h372a6 6 0 0 1 6-6zM48 60c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36zm0 160c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36zm0 160c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36z" /></svg>;
        case icontypesEnum.ADD:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 238H242V44c0-6.6-5.4-12-12-12h-12c-6.6 0-12 5.4-12 12v194H12c-6.6 0-12 5.4-12 12v12c0 6.6 5.4 12 12 12h194v194c0 6.6 5.4 12 12 12h12c6.6 0 12-5.4 12-12V274h194c6.6 0 12-5.4 12-12v-12c0-6.6-5.4-12-12-12z" /></svg>;
        case icontypesEnum.TRASH:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M368 64l-33.6-44.8C325.3 7.1 311.1 0 296 0h-80c-15.1 0-29.3 7.1-38.4 19.2L144 64H40c-13.3 0-24 10.7-24 24v2c0 3.3 2.7 6 6 6h20.9l33.2 372.3C78.3 493 99 512 123.9 512h264.2c24.9 0 45.6-19 47.8-43.7L469.1 96H490c3.3 0 6-2.7 6-6v-2c0-13.3-10.7-24-24-24H368zM216 32h80c5 0 9.8 2.4 12.8 6.4L328 64H184l19.2-25.6c3-4 7.8-6.4 12.8-6.4zm188 433.4c-.7 8.3-7.6 14.6-15.9 14.6H123.9c-8.3 0-15.2-6.3-15.9-14.6L75 96h362l-33 369.4z" /></svg>;
        case icontypesEnum.ENVELOPE:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" /></svg>;
        case icontypesEnum.USERS:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M408.795 244.28C423.843 224.794 432 201.025 432 176c0-61.855-50.043-112-112-112-61.853 0-112 50.041-112 112 0 25.025 8.157 48.794 23.205 68.28-12.93 3.695-71.205 25.768-71.205 92.757v60.677C160 425.442 182.558 448 210.286 448h219.429C457.442 448 480 425.442 480 397.714v-60.677c0-66.985-58.234-89.051-71.205-92.757zM320 96c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80zm128 301.714c0 10.099-8.187 18.286-18.286 18.286H210.286C200.187 416 192 407.813 192 397.714v-60.677c0-28.575 18.943-53.688 46.418-61.538l20.213-5.775C276.708 281.614 297.862 288 320 288s43.292-6.386 61.369-18.275l20.213 5.775C429.057 283.35 448 308.462 448 337.037v60.677zm-304 0V384H45.714C38.14 384 32 377.86 32 370.286v-45.508c0-21.431 14.207-40.266 34.813-46.153l12.895-3.684C93.904 283.237 110.405 288 128 288a95.582 95.582 0 0 1 29.234-4.564c5.801-10.547 13.46-20.108 22.904-28.483 9.299-8.247 18.915-14.143 27.098-18.247C197.22 218.209 192 197.557 192 176c0-16.214 2.993-31.962 8.708-46.618C183.09 108.954 157.03 96 128 96c-52.935 0-96 43.065-96 96 0 21.776 7.293 41.878 19.558 58.003C25.677 259.796 0 286.423 0 324.778v45.508C0 395.493 20.507 416 45.714 416h100.871A66.078 66.078 0 0 0 144 397.714zM128 128c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zm460.442 122.003C600.707 233.878 608 213.776 608 192c0-52.935-43.065-96-96-96-29.031 0-55.091 12.955-72.71 33.385C445.006 144.041 448 159.788 448 176c0 21.557-5.219 42.207-15.235 60.704 8.19 4.106 17.812 10.004 27.115 18.256 9.439 8.373 17.094 17.933 22.892 28.478A95.573 95.573 0 0 1 512 288c17.595 0 34.096-4.763 48.292-13.06l12.895 3.684C593.793 284.512 608 303.347 608 324.778v45.508c0 7.574-6.14 13.714-13.714 13.714H496v13.714c0 6.343-.914 12.473-2.585 18.286h100.871C619.493 416 640 395.493 640 370.286v-45.508c0-38.369-25.689-64.987-51.558-74.775zM512 256c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64z" /></svg>;
        case icontypesEnum.PENCIL:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zM164.686 347.313c6.249 6.249 16.379 6.248 22.627 0L368 166.627l30.059 30.059L174 420.745V386h-48v-48H91.255l224.059-224.059L345.373 144 164.686 324.687c-6.249 6.248-6.249 16.378 0 22.626zm-38.539 121.285l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z" /></svg>;
        case icontypesEnum.USER:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M430.769 312.653l-48.658-13.902C427.833 251.806 432 197.605 432 176 432 78.845 353.262 0 256 0 158.859 0 80 78.724 80 176c0 21.609 4.167 75.806 49.889 122.751l-48.658 13.902C19.49 330.294 0 386.442 0 420.344V448c0 35.29 28.71 64 64 64h384c35.29 0 64-28.71 64-64v-27.656c0-33.198-18.981-89.905-81.231-107.691zM256 32c79.529 0 144 64.471 144 144s-64.471 144-144 144-144-64.471-144-144S176.471 32 256 32zm224 416c0 17.673-14.327 32-32 32H64c-17.673 0-32-14.327-32-32v-27.656c0-35.718 23.678-67.109 58.022-76.922l69.862-19.961C176.969 334.613 210.109 352 256 352c45.897 0 79.038-17.392 96.116-28.538l69.862 19.961C456.322 353.235 480 384.626 480 420.344V448z" /></svg>;
        case icontypesEnum.DASHBAORD:
            return <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m197.332031 170.667969h-160c-20.585937 0-37.332031-16.746094-37.332031-37.335938v-96c0-20.585937 16.746094-37.332031 37.332031-37.332031h160c20.589844 0 37.335938 16.746094 37.335938 37.332031v96c0 20.589844-16.746094 37.335938-37.335938 37.335938zm-160-138.667969c-2.941406 0-5.332031 2.390625-5.332031 5.332031v96c0 2.945313 2.390625 5.335938 5.332031 5.335938h160c2.945313 0 5.335938-2.390625 5.335938-5.335938v-96c0-2.941406-2.390625-5.332031-5.335938-5.332031zm0 0" /><path d="m197.332031 512h-160c-20.585937 0-37.332031-16.746094-37.332031-37.332031v-224c0-20.589844 16.746094-37.335938 37.332031-37.335938h160c20.589844 0 37.335938 16.746094 37.335938 37.335938v224c0 20.585937-16.746094 37.332031-37.335938 37.332031zm-160-266.667969c-2.941406 0-5.332031 2.390625-5.332031 5.335938v224c0 2.941406 2.390625 5.332031 5.332031 5.332031h160c2.945313 0 5.335938-2.390625 5.335938-5.332031v-224c0-2.945313-2.390625-5.335938-5.335938-5.335938zm0 0" /><path d="m474.667969 512h-160c-20.589844 0-37.335938-16.746094-37.335938-37.332031v-96c0-20.589844 16.746094-37.335938 37.335938-37.335938h160c20.585937 0 37.332031 16.746094 37.332031 37.335938v96c0 20.585937-16.746094 37.332031-37.332031 37.332031zm-160-138.667969c-2.945313 0-5.335938 2.390625-5.335938 5.335938v96c0 2.941406 2.390625 5.332031 5.335938 5.332031h160c2.941406 0 5.332031-2.390625 5.332031-5.332031v-96c0-2.945313-2.390625-5.335938-5.332031-5.335938zm0 0" /><path d="m474.667969 298.667969h-160c-20.589844 0-37.335938-16.746094-37.335938-37.335938v-224c0-20.585937 16.746094-37.332031 37.335938-37.332031h160c20.585937 0 37.332031 16.746094 37.332031 37.332031v224c0 20.589844-16.746094 37.335938-37.332031 37.335938zm-160-266.667969c-2.945313 0-5.335938 2.390625-5.335938 5.332031v224c0 2.945313 2.390625 5.335938 5.335938 5.335938h160c2.941406 0 5.332031-2.390625 5.332031-5.335938v-224c0-2.941406-2.390625-5.332031-5.332031-5.332031zm0 0" /></svg>;
        case icontypesEnum.GROUPS:
            return <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m296 368a40 40 0 1 0 -40 40 40.045 40.045 0 0 0 40-40zm-40 24a24 24 0 1 1 24-24 24.028 24.028 0 0 1 -24 24z" /><path d="m290 408h-68a38.043 38.043 0 0 0 -38 38v50a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-50a38.043 38.043 0 0 0 -38-38zm22 80h-16v-32a8 8 0 0 0 -16 0v32h-48v-32a8 8 0 0 0 -16 0v32h-16v-42a22.025 22.025 0 0 1 22-22h68a22.025 22.025 0 0 1 22 22z" /><path d="m296 48a40 40 0 1 0 -40 40 40.045 40.045 0 0 0 40-40zm-40 24a24 24 0 1 1 24-24 24.028 24.028 0 0 1 -24 24z" /><path d="m290 88h-68a38.043 38.043 0 0 0 -38 38v50a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-50a38.043 38.043 0 0 0 -38-38zm22 80h-16v-32a8 8 0 0 0 -16 0v32h-48v-32a8 8 0 0 0 -16 0v32h-16v-42a22.025 22.025 0 0 1 22-22h68a22.025 22.025 0 0 1 22 22z" /><path d="m120 208a40 40 0 1 0 -40 40 40.045 40.045 0 0 0 40-40zm-40 24a24 24 0 1 1 24-24 24.028 24.028 0 0 1 -24 24z" /><path d="m144 344a8 8 0 0 0 8-8v-50a38.043 38.043 0 0 0 -38-38h-68a38.043 38.043 0 0 0 -38 38v50a8 8 0 0 0 8 8zm-120-58a22.025 22.025 0 0 1 22-22h68a22.025 22.025 0 0 1 22 22v42h-16v-32a8 8 0 0 0 -16 0v32h-48v-32a8 8 0 0 0 -16 0v32h-16z" /><path d="m472 208a40 40 0 1 0 -40 40 40.045 40.045 0 0 0 40-40zm-40 24a24 24 0 1 1 24-24 24.028 24.028 0 0 1 -24 24z" /><path d="m466 248h-68a38.043 38.043 0 0 0 -38 38v50a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-50a38.043 38.043 0 0 0 -38-38zm22 80h-16v-32a8 8 0 0 0 -16 0v32h-48v-32a8 8 0 0 0 -16 0v32h-16v-42a22.025 22.025 0 0 1 22-22h68a22.025 22.025 0 0 1 22 22z" /><path d="m156.166 420.037a192.08 192.08 0 0 1 -53.77-48.823 8 8 0 1 0 -12.796 9.611 208.016 208.016 0 0 0 58.23 52.872 8 8 0 0 0 8.332-13.66z" /><path d="m420.819 369.6a8 8 0 0 0 -11.2 1.591 192.071 192.071 0 0 1 -53.784 48.842 8 8 0 1 0 8.332 13.66 208.028 208.028 0 0 0 58.245-52.892 8 8 0 0 0 -1.593-11.201z" /><path d="m325.119 76.814a192.175 192.175 0 0 1 84.5 63.991 8 8 0 0 0 12.793-9.61 208.167 208.167 0 0 0 -91.53-69.306 8 8 0 1 0 -5.762 14.925z" /><path d="m91.181 142.4a8 8 0 0 0 11.2-1.591 192.175 192.175 0 0 1 84.5-63.991 8 8 0 1 0 -5.762-14.925 208.167 208.167 0 0 0 -91.53 69.307 8 8 0 0 0 1.592 11.2z" /><path d="m256 288a32 32 0 1 0 -32-32 32.036 32.036 0 0 0 32 32zm0-48a16 16 0 1 1 -16 16 16.019 16.019 0 0 1 16-16z" /></g></svg>;
        case icontypesEnum.ANGLE_UP:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z" />
            </svg>;
        case icontypesEnum.ACTIONS:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352z" /></svg>;
        case icontypesEnum.ANGLE_DOWN:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z" /></svg>;
        case icontypesEnum.COG:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 1 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 1-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 1-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 1 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 1 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 1 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 0-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 0 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z" /></svg>;
        default:
            return <svg></svg>;
    }
}