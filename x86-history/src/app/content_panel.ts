export interface content{
    image:string,
    title:string,
    body1:string,
    simulatorBody:string,
    image2?:string,
    subtitle1?:string,
    body2?:string,
}

export const content_panel:Record<string,content>={
    ENIAC:{
        image:"/image",
        title:"ENIAC",
        body1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        simulatorBody:"SIMULATORRRRRRRRRRRRRRRRRRSSSSSSSSSSSSSS"
    },

}