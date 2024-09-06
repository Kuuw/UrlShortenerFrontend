import { } from "@nextui-org/link";
import { } from "@nextui-org/snippet";
import { } from "@nextui-org/code";
import { } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/react";

import { } from "@/config/site";
import { } from "@/components/primitives";
import { } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

function handleSubmit() {
  console.log("Shorten the link");
}

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-2xl">Shorten Link</h1>
        </div>
        <div className="flex items-center max-w-3xl text-center">
          <Input
            id="url"
            size="lg"
            isClearable
            color="secondary"
            type="url"
            placeholder="Enter your link"
            className="max-w-lg w-[500px]"
            fullWidth
          />
          <Spacer x={1}></Spacer>
          <Button color="secondary" variant="light" radius="full" className="w-[16px] px-0 min-w-7 min-h-7 h-7" onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </Button>
        </div>

        <div className="max-w-lg text-center justify-center">
          <Button color="secondary" variant="shadow" className="bg-gradient-to-tr from-red-500 to-purple-500 text-white shadow-lg">
            Shorten
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
