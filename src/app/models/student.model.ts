export interface Student {
	id: number;
	name: string;
	email: string;
	enrolledCourseIds?: number[];	//references to courses
	phoneNumber?: number;
	registrationDate?: string;
}
