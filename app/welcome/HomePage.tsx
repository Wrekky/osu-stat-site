import { PlayGraph } from "~/graphs/PlayGraph";
import { PpGraph } from "~/graphs/PpGraph";
import { TagsGraph } from "~/graphs/TagsGraph";

export function HomePage() {
  return (
    <main>
      <div>
        <PlayGraph />
      </div>
      <div>
        <PpGraph />
      </div>
      <div>
        <TagsGraph />
      </div>
    </main>
  );
}
