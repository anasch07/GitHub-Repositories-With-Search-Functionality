export default function Loading() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex h-124 w-full items-center justify-center gap-2 rounded-2xl bg-white">
                <div className="aspect-square w-5 animate-bounce rounded-full bg-bleu-500"></div>
                <div className="aspect-square w-5 animate-bounce rounded-full bg-blue-500"></div>
                <div className="aspect-square w-5 animate-bounce rounded-full bg-blue-500"></div>
            </div>
        </div>
    );
}
