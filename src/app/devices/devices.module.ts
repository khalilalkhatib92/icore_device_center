export interface deviceCreationDTO{
    title: string;
    summary:string;
    inMarket: boolean;
    dealer: string;
    releaseDate: Date;
    poster:File;
    genresIds: number[];
    deviceCenterIds: number[];
}

export interface deviceDTO{
    title: string;
    summary:string;
    inMarket: boolean;
    dealer: string;
    releaseDate: Date;
    poster:string;
}