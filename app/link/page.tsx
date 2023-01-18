import StatusContainer from "../StatusContainer";

export default function Page() {
    return (
        <StatusContainer>
            <div className="text-danger">
                No code given. Please generate a new code by running &quot;/link&quot; in-game.
            </div>
        </StatusContainer>
    );
}
