import { ButtonsShowcase } from "./showcase/ButtonsShowcase";
import { InputsShowcase } from "./showcase/InputsShowcase";
import { SelectionShowcase } from "./showcase/SelectionShowcase";
import { DataDisplayShowcase } from "./showcase/DataDisplayShowcase";
import { FeedbackShowcase } from "./showcase/FeedbackShowcase";
import { OverlayShowcase } from "./showcase/OverlayShowcase";
import { NavigationShowcase } from "./showcase/NavigationShowcase";
import { LayoutShowcase } from "./showcase/LayoutShowcase";
import { TypographyShowcase } from "./showcase/TypographyShowcase";
import { FileUploadShowcase } from "./showcase/FileUploadShowcase";
import { ToastShowcase } from "./showcase/ToastShowcase";
import { LinkShowcase } from "./showcase/LinkShowcase";
import { FormShowcase } from "./showcase/FormShowcase";
import { MediaShowcase } from "./showcase/MediaShowcase";
import { UtilitiesShowcase } from "./showcase/UtilitiesShowcase";
import { PrimitivesShowcase } from "./showcase/PrimitivesShowcase";

interface ComponentsSectionProps {
  activeSubSection: string;
}

export function ComponentsSection({ activeSubSection }: ComponentsSectionProps) {
  switch (activeSubSection) {
    case "buttons":          return <ButtonsShowcase />;
    case "inputs":           return <InputsShowcase />;
    case "selection":        return <SelectionShowcase />;
    case "data-display":     return <DataDisplayShowcase />;
    case "feedback":         return <FeedbackShowcase />;
    case "overlay":          return <OverlayShowcase />;
    case "navigation-comps": return <NavigationShowcase />;
    case "layout-comps":     return <LayoutShowcase />;
    case "typography-comps": return <TypographyShowcase />;
    case "file-upload":      return <FileUploadShowcase />;
    case "toast":            return <ToastShowcase />;
    case "link":             return <LinkShowcase />;
    case "form":             return <FormShowcase />;
    case "media":            return <MediaShowcase />;
    case "utilities":        return <UtilitiesShowcase />;
    case "primitives":       return <PrimitivesShowcase />;
    default:                 return <ButtonsShowcase />;
  }
}
