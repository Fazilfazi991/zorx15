
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";

const ExitIntentPopup = () => {
    const [open, setOpen] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setOpen(true);
                setHasShown(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [hasShown]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700">
                <div className="absolute right-4 top-4">
                    {/* Close button handled by Dialog primitive usually, but custom styling here if needed */}
                </div>

                <DialogHeader className="space-y-4 pt-4">
                    <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-2">
                        <Gift className="w-8 h-8 text-blue-400 animate-bounce" />
                    </div>
                    <DialogTitle className="text-3xl font-bold text-center">Wait! Before you go...</DialogTitle>
                    <DialogDescription className="text-gray-300 text-center text-lg">
                        Get our <span className="text-white font-bold">2025 SEO Checklist</span> completely free.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <ul className="space-y-2 text-sm text-gray-400 pl-4">
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span> 47-point technical audit checklist
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span> Content optimization templates
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span> Link building swipe file
                        </li>
                    </ul>

                    <div className="space-y-3 pt-2">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold">
                            Send Me The Checklist
                        </Button>
                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="w-full text-center text-sm text-gray-500 hover:text-gray-300 mt-2"
                    >
                        No thanks, I don't want more traffic.
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ExitIntentPopup;
