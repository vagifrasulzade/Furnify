 
export default function CookiesPolicy() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookies Policy</h1>
          <p className="text-lg text-gray-600 mb-10">
            This Cookies Policy explains what cookies are, how we use them, and how you can manage them when you visit our website, Furnity.
          </p>
        </div>
 
        <div className="text-gray-800 text-base leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">What are Cookies?</h2>
            <p>
              Cookies are small pieces of data stored on your device (computer or mobile device) when you browse websites.
              They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </div>
 
          <div>
            <h2 className="text-2xl font-semibold mb-2">How We Use Cookies</h2>
            <p>We use cookies for various purposes:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>Essential Cookies:</strong> Necessary for the website to function properly.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> Help us understand how visitors interact with our website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Remember your preferences and choices.
              </li>
              <li>
                <strong>Targeting/Advertising Cookies:</strong> Deliver relevant advertisements to you.
              </li>
            </ul>
          </div>
 
          <div>
            <h2 className="text-2xl font-semibold mb-2">Managing Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies.
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
              If you disable or refuse cookies, please note that some parts of this website may be inaccessible or not function properly
 
inaccessible or not function properly.
            </p>
            <p className="mt-4">
              For more information about cookies, visit{" "}
              <a
                href="https://allaboutcookies.org"
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                allaboutcookies.org
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
