import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blogs = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        Our Blog
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Insights, updates, and expert advice on digital marketing and business growth.
                    </p>

                    <div className="p-12 border border-border rounded-lg bg-card shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
                        <p className="text-muted-foreground mb-8">
                            We're working on some exciting content for you. Check back soon!
                        </p>
                        <Link to="/">
                            <Button>Return Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;
