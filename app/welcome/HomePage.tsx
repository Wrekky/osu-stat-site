import { PlayGraph } from "~/components/graphs/PlayGraph";
import { PpGraph } from "~/components/graphs/PpGraph";
import { TagsGraph } from "~/components/graphs/TagsGraph";
import { TopBar } from "~/components/TopBar";
export function HomePage() {
  return (
    <main>
      <div className="flex justify-center m-8">
        <TopBar />
      </div>
      
      <div className="flex justify-center">
        <PlayGraph />
      </div>
      <div className="flex justify-center">
        <PpGraph />
      </div>
      <div className="flex justify-center">
        <TagsGraph />
      </div>
    </main>
  );
}
