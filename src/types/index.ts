export interface Answer {
    id: string;
    text: string;
    checked: boolean;
}
    
export interface Vote {
    text: string;
    count: number;
}
    
export interface FormData {
    id: number;
    question: string;
    answers: Answer[];
    vote: Vote;
}