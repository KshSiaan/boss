import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function AnimatedToggle() {
  return (
    <ToggleGroup
      type="single"
      defaultValue="business"
      className="rounded-full border p-2 space-x-6 w-full px-5!"
    >
      <ToggleGroupItem
        value="business"
        className="px-4 py-2 rounded-full! transition-all duration-300 data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:scale-105 data-[state=off]:opacity-70"
      >
        Business
      </ToggleGroupItem>
      <ToggleGroupItem
        value="provider"
        className="px-4 py-2 rounded-full! transition-all duration-300 data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:scale-105 data-[state=off]:opacity-70"
      >
        Provider
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
