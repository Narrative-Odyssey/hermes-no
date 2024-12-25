import StatusContainer from "@/components/StatusContainer";

export default function NoCode() {
    return (
        <StatusContainer type="danger">
            No code given. Please generate a new code by running &quot;/link&quot; in-game.
        </StatusContainer>
    );
}
