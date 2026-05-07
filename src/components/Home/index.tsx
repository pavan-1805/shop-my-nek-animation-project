import HeroSlider from "./HeroSlider";
import { ProductDrops } from "./ProductDrops";
import { ArtifactDrops } from "./ArtifactDrops";
import BrandNarrative from "./BrandNarrative";

export function Home() {
  return (
    <div>
      <HeroSlider />
      <ProductDrops />
      <ArtifactDrops />

      <BrandNarrative />
    </div>
  );
}
