import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Spacer, Divider } from "@nextui-org/react";
import { useState } from 'react';
import DefaultLayout from "@/layouts/default";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@nextui-org/card";


function validURL(str: string) {
  var pattern = new RegExp('(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?');
  return !!pattern.test(str);
}

function validCustomShortenedURL(str: string) {
  var pattern = new RegExp('^[a-zA-Z0-9]*$');
  return !!pattern.test(str);
}


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function IndexPage(this: any) {
  const [url, setUrl] = useState("");
  const [urlLength, setUrlLength] = useState(5);
  const [shortUrl, setShortUrl] = useState("");
  const [customShortenedUrl, setCustomShortenedUrl] = useState("");
  const [currentColor, setColor] = useState<"secondary" | "default" | "primary" | "success" | "warning" | "danger" | undefined>("secondary");
  const [settingsSwitch, setSettingsSwitch] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (urlLength < 4 || urlLength > 10) {
      setColor("danger");
      alert("Character count must be between 4 and 10");
      await delay(1000);
      setColor("secondary");
      return;
    }
    if (customShortenedUrl !== "" && !validCustomShortenedURL(customShortenedUrl)) {
      setColor("danger");
      alert("Custom shortened URL must contain only alphanumeric characters");
      await delay(1000);
      setColor("secondary");
      return;
    }
    if (validURL(url)) {
      console.log("Valid URL");
      fetch(("http://localhost:5169/api/Url?url=" + encodeURIComponent(url) + "&length=" + urlLength + "&customShortenedUrl=" + encodeURIComponent(customShortenedUrl)), {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => { console.log(data); return data })
        .then(data => setShortUrl("http://localhost:5173/" + data.url));
      setColor("success");
      await delay(1000);
      setColor("secondary");
    } else {
      console.log("Invalid URL");
      setColor("danger");
      await delay(1000);
      setColor("secondary");
    }
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-2xl">Shorten Link</h1>
        </div>
        <form>
          <div className="flex items-center max-w-3xl text-center">
            <Input
              id="url"
              size="lg"
              isClearable
              color={currentColor}
              type="url"
              placeholder="Enter your link"
              className="max-w-lg w-[500px]"
              fullWidth
              onChange={(e) => setUrl(e.target.value)}
            />
            <Spacer x={1}></Spacer>
            <Button color={currentColor} variant="light" radius="full" className="w-[16px] px-0 min-w-7 min-h-7 h-7" onClick={(e) => { e.preventDefault(); setSettingsSwitch(!settingsSwitch) }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </Button>
          </div>
          <Spacer y={3}></Spacer>
          {settingsSwitch &&
            <Card className="max-w-3xl">
              <CardBody>
                <Input
                  type="number"
                  size="md"
                  label="Character Count (if custom shortened URL is not provided)"
                  placeholder="5"
                  color="default"
                  labelPlacement="outside"
                  className="max-w-lg w-[500px]"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">Characters</span>
                    </div>
                  }
                  fullWidth
                  onChange={(e) => { e.preventDefault(); setUrlLength(parseInt(e.target.value)) }}
                  value={urlLength.toString()}
                />
                <Spacer y={3}></Spacer>
                <Divider />
                <Spacer y={3}></Spacer>
                <Input
                  id="customShortenedUrl"
                  size="lg"
                  color="default"
                  type="text"
                  label="Custom Shortened URL"
                  labelPlacement="inside"
                  placeholder=""
                  className="max-w-lg w-[500px]"
                  fullWidth
                  onChange={(e) => setCustomShortenedUrl(e.target.value)}
                  value={customShortenedUrl}
                />
              </CardBody>
            </Card>
          }
          <Spacer y={1}></Spacer>
        </form>


        <div className="max-w-lg text-center justify-center">
          <Button color="secondary" variant="shadow" className="bg-gradient-to-tr from-red-500 to-purple-500 text-white shadow-lg" onClick={handleSubmit}>
            Shorten
          </Button>
        </div>
        {shortUrl !== "" &&
          <div className="max-w-lg text-center justify-center">
            <Card className="max-w-lg">
              <CardBody>
                <Link className="text-xl" to={shortUrl}>{shortUrl}</Link>
                <Spacer y={3}></Spacer>
                <Button color="secondary" variant="shadow" className="min-w-8" onClick={() => { navigator.clipboard.writeText(shortUrl) }}>Copy</Button>
              </CardBody>
            </Card>
          </div>
        }
      </section>
    </DefaultLayout>
  );
}
