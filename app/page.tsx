import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <Link href="/">
          <Image
            src={"/content.png"}
            alt="logo"
            width={80}
            height={80}
            unoptimized
          />
        </Link>
        <div>
          <Link href="/dashboard">
            <Button className="bg-blue-500 text-white px-4 py-2 rounded">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">AI Content Generator</h1>
          <p className="text-xl mb-6">
            Revolutionize your content creation with our AI-powered app,
            delivering engaging and high-quality text in seconds.
          </p>
          <Link href="/dashboard">
            <Button className="bg-blue-500 text-white px-4 h-11 w-[200px] py-5 mt-10 rounded">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className=" bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-around">
            {/* Feature 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="p-6 bg-white rounded hover:scale-105 transition-all cursor-pointer">
                <div className="text-blue-500 text-3xl mb-4">📄</div>
                <h3 className="text-xl font-bold mb-2">5+ Templates</h3>
                <p className="text-gray-700">
                  Responsive, and mobile-first project on the web.
                </p>
                <a
                  href="/dashboard"
                  className="text-blue-500 mt-4 inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="p-6 bg-white rounded hover:scale-105 transition-all cursor-pointer">
                <div className="text-blue-500 text-3xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-2">Customizable</h3>
                <p className="text-gray-700">
                  Components are easily customized and extendable.
                </p>
                <a
                  href="/dashboard"
                  className="text-blue-500 mt-4 inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="p-6 bg-white rounded hover:scale-105 transition-all cursor-pointer">
                <div className="text-blue-500 text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2">Free to Use</h3>
                <p className="text-gray-700">
                  Every component and plugin is well documented.
                </p>
                <a
                  href="/dashboard"
                  className="text-blue-500 mt-4 inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="p-6 bg-white rounded hover:scale-105 transition-all cursor-pointer">
                <div className="text-blue-500 text-3xl mb-4">🕒</div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-700">
                  Contact us 24 hours a day, 7 days a week.
                </p>
                <a
                  href="/dashboard"
                  className="text-blue-500 mt-4 inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}