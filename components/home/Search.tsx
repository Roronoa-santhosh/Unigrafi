"use client";

import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function SearchBarContent() {
  return (
    <ButtonGroup className="">
      <Input
        placeholder="Search poster , artist ,collections..."
        className="w-[clamp(150px,35vw,400px)] p-[clamp(10px,3vw,20px)]  rounded-lg border-2 border-bg-border bg-bg-surface text-ink-primary placeholder:text-ink-primary/50 placeholder:bg-bg-light"
      />
      <Button
        variant="outline"
        aria-label="Search"
        className="w-17 p-[clamp(10px,3vw,20px)]  border-bg-border bg-bg-surface  text-ink-primary"
      >
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}

export default function Search() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <Popover>
          <PopoverTrigger asChild>
            <div>
              <SearchBarContent />
            </div>
          </PopoverTrigger>

          <PopoverContent
            className="w-(--radix-popover-trigger-width) p-0"
            align="start"
          >
            <Command>
              <CommandList className="gap-5">
                <CommandItem>Naruto Poster</CommandItem>
                <CommandItem>One Piece Poster</CommandItem>
                <CommandItem>Attack on Titan</CommandItem>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <div>
              <SearchBarContent />
            </div>
          </DialogTrigger>

          <DialogContent className="h-[100dvh] max-w-full p-0">
            <Command>
              <CommandInput placeholder="Search posters..." />
              <CommandList className="gap-5">
                <CommandItem>Naruto Poster</CommandItem>
                <CommandItem>One Piece Poster</CommandItem>
                <CommandItem>Attack on Titan</CommandItem>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
