import { useEffect, useState } from "react";
import { getDatabase, off, onValue, ref, set } from "firebase/database";
import { useAuth } from "../auth";

export type Answer = {
    content: string;
    visible: boolean;
    number: number;
}

export type Question = {
    content: string;
    visible: boolean;
    answers: Answer[];
}

interface FamilyFeud {
    currentQuestion: number;
    setActiveQuestion: (_: number) => void;
    questions: Question[];
    updateQuestion: (_1: number, _2: Question) => void;
}


export const useFamilyFeud = (): FamilyFeud => {
    const db = getDatabase();
    const auth = useAuth();
    const userId = auth!.user?.uid;

    const currentQuestionRef = ref(db, 'currentQuestion');
    const questionsRef = ref(db, 'questions');

    const [currentQuestion, setCurrentQuestion] = useState(-1);
    const [questions, setQuestions] = useState<Question[]>([]);

    const setActiveQuestion = (questionNmbr: number) => {
        if (!userId) return;
        set(currentQuestionRef, questionNmbr);
        setCurrentQuestion(questionNmbr);
    }

    const updateQuestion = (questionNmbr: number, question: Question) => {
        if (!userId) return;
        set(ref(db, `questions/${questionNmbr}`), question);
    }

    useEffect(() => {
        onValue(currentQuestionRef, snapshot => {
            setCurrentQuestion(snapshot.val());
        })
        return () => off(currentQuestionRef);
    }, []);

    useEffect(() => {
        onValue(questionsRef, snapshot => {
            setQuestions(snapshot.val());
        })
        return () => off(questionsRef);
    }, []);

    return {
        currentQuestion,
        setActiveQuestion,
        questions,
        updateQuestion
    };
}