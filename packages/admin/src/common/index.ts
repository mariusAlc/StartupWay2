export interface Recovery {
	recoveryId:number,
	userId:number,
	email: string,
	recoveryLink:String
} 
export interface Review {
	location:string,
	workshopNr:string,
	mentor:string,
	teamTrack:string,
	businessTrack:string,
	startupName:string,
	description:string,
	webLink:string,
	teamId:number,
	mentorNotes:string,
	adminNotes:string,
	assessment20May:string,
	assessment12Oct:string,
	updatedAt:string,
	lastMentorUpdate:string
}