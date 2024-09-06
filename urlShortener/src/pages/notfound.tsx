import { Spacer } from "@nextui-org/react";
import "@/styles/globals.css";

export default function NotFoundPage() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-screen">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className="text-9xl font-black bg-gradient-to-tr from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent">404</h1>
                    <Spacer y={4}></Spacer>
                    <p className="text-xl text-slate-100">Oops! The page you are looking for does not exist.</p>
                </div>
            </section>
        </div>
    )
}