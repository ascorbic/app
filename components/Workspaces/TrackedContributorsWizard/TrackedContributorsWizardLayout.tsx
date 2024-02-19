import { FaArrowLeft } from "react-icons/fa6";
import Card from "components/atoms/Card/card";
import Button from "components/atoms/Button/button";

interface TrackedContributorsWizardLayoutProps {
  onCancel: () => void;
  trackedContributorsCount: number;
  onAddToTrackingList: () => void;
  stepData?: {
    step: "pickRepos";
    repositoriesCount: number;
  };
  enableAddToTrackingList: boolean;
  children: React.ReactNode;
}

export const TrackedContributorsWizardLayout = ({
  trackedContributorsCount,
  onAddToTrackingList,
  onCancel,
  stepData,
  enableAddToTrackingList,
  children,
}: TrackedContributorsWizardLayoutProps) => {
  return (
    <Card className="!p-0 max-w-3xl">
      {/* Using !p-0 for now as the Card component has explicit padding of p-3. We can revisit. */}
      <div style={{ minWidth: "712px" }}>
        <button
          className="flex gap-1 items-center ml-4 mt-4 border border-transparent"
          onClick={() => {
            onCancel();
          }}
        >
          <FaArrowLeft /> back
        </button>
        <div className="flex flex-col justify-between gap-4">
          <div className="px-4 pt-2">
            <h2 className="font-semibold mb-4">
              {stepData?.step === "pickRepos"
                ? "Add contributors from tracked repositories"
                : "Add contributors to track"}
            </h2>
            {children}
          </div>
          <div className="flex gap-4 items-center justify-end border-t-1 p-4" aria-live="assertive">
            <span>
              {stepData?.step === "pickRepos" ? (
                <>
                  <span className="font-semibold">{stepData.repositoriesCount}</span> Selected repositories
                </>
              ) : (
                <>
                  <span className="font-semibold">{trackedContributorsCount}</span> Selected contributors
                </>
              )}
            </span>
            <Button
              variant="primary"
              onClick={() => {
                onAddToTrackingList();
              }}
              disabled={!enableAddToTrackingList}
            >
              Add to tracking list
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
