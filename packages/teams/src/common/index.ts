export enum BusinessTrack {
	NONE = "NONE",
    AGRICULTURE = "Agriculture",
    CYBERSECURITY = "CyberSecurity",
    FINTECH = "FinTech",
    HL = "Health&Lifestyle",
    RETAIL = "Retail",
    SMARTCITY = "SmartCity",
    SMARTMOBILITY = "SmartMobility",
    OTHER = "Other"
}

export enum TeamType {
	NONE = "NONE",
	SPIN = "Spin-off",
	START = "Start-up",
	SCALE = "Scale-up"
}

export enum BucharestWorkshop {
    MONDAY="Mon",
    WEDNESDAY="Wed",
    THURSDAY="Thu",
}

export enum OthersWorkshop {
    TUESDAY="Tue",
    WEDNESDAY="Wed",
    THURSDAY="Thu",
}

export enum WorkshopDay {
	NONE = "NONE",
    MONDAY="Mon",
    TUESDAY="Tue",
    WEDNESDAY="Wed",
    THURSDAY="Thu",
    FRIDAY="Fri",
    SATURDAY="Sat",
    SUNDAY="Sun"
    
}

export interface Tab {
	key:number,
	title:string,
	icon:string,
	link:string
}
export interface UserActivity {
	activityId:string,
	userId:string,
	teamId:string,
	noOfHours:number,
	date: Date,
	description:string
}

export interface ProductDetails {
    [key: string]: any;
}

export interface TeamDetails
{
    [key: string]: any;
}

export interface Team {
    teamId: string,
    productId: string,
    teamName: string,
	teamDetails: TeamDetails,
	location:string,
	year:number,
    reproductId?:number
}

export interface UserTeams {
    userProductId: string,
    teamId: string,
    userId: string,
    role: string
}

export interface Product {
	productId: string,
	startupName: string,
	businessTrack: BusinessTrack | string,
    teamType: TeamType | string,
    workshopDay: WorkshopDay | string,
    mentorId: string,
    descriptionEN: string,
    descriptionRO: string,
    pendingDescriptionEN: string,
    pendingDescriptionRO: string,
    productDetails: ProductDetails,
    updatedAt: Date,
    lastMentorUpdate: Date
}


export interface VisualUser {
	faculty:string,
	group:string,
	participant:string,
	pitcher:string,
	transport:string,
	image:string
}