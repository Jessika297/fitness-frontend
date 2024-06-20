import ExerciseList from "@/app/components/ExerciseList";

export default function Home() {
    return (
        <div>
            <h1 className={'text-center my-2 font-bold'}>Welcome to My Fitness App</h1>
            <ExerciseList/>
        </div>
    );
}
