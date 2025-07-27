import { Instagram, Youtube } from "lucide-react"

export function NomadicRoadFooter() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo and Copyright */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white transform rotate-45 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-6 bg-white transform -rotate-45"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold tracking-wider">NOMADIC ROAD</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">© 2025 Nomadic Road.</p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      Signature Expeditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      Custom Expeditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      Archives
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      In the press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      Work with us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">Company Headquarters: ON, Canada</p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-900 hover:text-gray-600 underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-900 hover:text-gray-600 underline">
              Booking Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
