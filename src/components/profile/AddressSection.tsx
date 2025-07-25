import { useState } from 'react';
import { MapPin, Edit2, Save, X } from 'lucide-react';

interface AddressInfo {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface AddressSectionProps {
  addressInfo: AddressInfo;
  onSaveAddress: (addressInfo: AddressInfo) => void;
  onError: (error: string) => void;
}

export default function AddressSection({ addressInfo, onSaveAddress, onError }: AddressSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAddress, setEditedAddress] = useState(addressInfo);

  // Generate country options
  const generateCountryOptions = () => {
    return [
      { value: "AF", label: "Afghanistan" },
      { value: "AL", label: "Albania" },
      { value: "DZ", label: "Algeria" },
      { value: "AS", label: "American Samoa" },
      { value: "AD", label: "Andorra" },
      { value: "AO", label: "Angola" },
      { value: "AI", label: "Anguilla" },
      { value: "AQ", label: "Antarctica" },
      { value: "AG", label: "Antigua and Barbuda" },
      { value: "AR", label: "Argentina" },
      { value: "AM", label: "Armenia" },
      { value: "AW", label: "Aruba" },
      { value: "AU", label: "Australia" },
      { value: "AT", label: "Austria" },
      { value: "AZ", label: "Azerbaijan" },
      { value: "BS", label: "Bahamas" },
      { value: "BH", label: "Bahrain" },
      { value: "BD", label: "Bangladesh" },
      { value: "BB", label: "Barbados" },
      { value: "BY", label: "Belarus" },
      { value: "BE", label: "Belgium" },
      { value: "BZ", label: "Belize" },
      { value: "BJ", label: "Benin" },
      { value: "BM", label: "Bermuda" },
      { value: "BT", label: "Bhutan" },
      { value: "BO", label: "Bolivia" },
      { value: "BA", label: "Bosnia and Herzegovina" },
      { value: "BW", label: "Botswana" },
      { value: "BV", label: "Bouvet Island" },
      { value: "BR", label: "Brazil" },
      { value: "IO", label: "British Indian Ocean Territory" },
      { value: "BN", label: "Brunei Darussalam" },
      { value: "BG", label: "Bulgaria" },
      { value: "BF", label: "Burkina Faso" },
      { value: "BI", label: "Burundi" },
      { value: "KH", label: "Cambodia" },
      { value: "CM", label: "Cameroon" },
      { value: "CA", label: "Canada" },
      { value: "CV", label: "Cape Verde" },
      { value: "KY", label: "Cayman Islands" },
      { value: "CF", label: "Central African Republic" },
      { value: "TD", label: "Chad" },
      { value: "CL", label: "Chile" },
      { value: "CN", label: "China" },
      { value: "CX", label: "Christmas Island" },
      { value: "CC", label: "Cocos (Keeling) Islands" },
      { value: "CO", label: "Colombia" },
      { value: "KM", label: "Comoros" },
      { value: "CG", label: "Congo" },
      { value: "CD", label: "Congo, the Democratic Republic of the" },
      { value: "CK", label: "Cook Islands" },
      { value: "CR", label: "Costa Rica" },
      { value: "CI", label: "Côte d'Ivoire" },
      { value: "HR", label: "Croatia" },
      { value: "CU", label: "Cuba" },
      { value: "CY", label: "Cyprus" },
      { value: "CZ", label: "Czech Republic" },
      { value: "DK", label: "Denmark" },
      { value: "DJ", label: "Djibouti" },
      { value: "DM", label: "Dominica" },
      { value: "DO", label: "Dominican Republic" },
      { value: "EC", label: "Ecuador" },
      { value: "EG", label: "Egypt" },
      { value: "SV", label: "El Salvador" },
      { value: "GQ", label: "Equatorial Guinea" },
      { value: "ER", label: "Eritrea" },
      { value: "EE", label: "Estonia" },
      { value: "ET", label: "Ethiopia" },
      { value: "FK", label: "Falkland Islands (Malvinas)" },
      { value: "FO", label: "Faroe Islands" },
      { value: "FJ", label: "Fiji" },
      { value: "FI", label: "Finland" },
      { value: "FR", label: "France" },
      { value: "GF", label: "French Guiana" },
      { value: "PF", label: "French Polynesia" },
      { value: "TF", label: "French Southern Territories" },
      { value: "GA", label: "Gabon" },
      { value: "GM", label: "Gambia" },
      { value: "GE", label: "Georgia" },
      { value: "DE", label: "Germany" },
      { value: "GH", label: "Ghana" },
      { value: "GI", label: "Gibraltar" },
      { value: "GR", label: "Greece" },
      { value: "GL", label: "Greenland" },
      { value: "GD", label: "Grenada" },
      { value: "GP", label: "Guadeloupe" },
      { value: "GU", label: "Guam" },
      { value: "GT", label: "Guatemala" },
      { value: "GG", label: "Guernsey" },
      { value: "GN", label: "Guinea" },
      { value: "GW", label: "Guinea-Bissau" },
      { value: "GY", label: "Guyana" },
      { value: "HT", label: "Haiti" },
      { value: "HM", label: "Heard Island and McDonald Islands" },
      { value: "VA", label: "Holy See (Vatican City State)" },
      { value: "HN", label: "Honduras" },
      { value: "HK", label: "Hong Kong" },
      { value: "HU", label: "Hungary" },
      { value: "IS", label: "Iceland" },
      { value: "IN", label: "India" },
      { value: "ID", label: "Indonesia" },
      { value: "IR", label: "Iran, Islamic Republic of" },
      { value: "IQ", label: "Iraq" },
      { value: "IE", label: "Ireland" },
      { value: "IM", label: "Isle of Man" },
      { value: "IL", label: "Israel" },
      { value: "IT", label: "Italy" },
      { value: "JM", label: "Jamaica" },
      { value: "JP", label: "Japan" },
      { value: "JE", label: "Jersey" },
      { value: "JO", label: "Jordan" },
      { value: "KZ", label: "Kazakhstan" },
      { value: "KE", label: "Kenya" },
      { value: "KI", label: "Kiribati" },
      { value: "KP", label: "Korea, Democratic People's Republic of" },
      { value: "KR", label: "Korea, Republic of" },
      { value: "KW", label: "Kuwait" },
      { value: "KG", label: "Kyrgyzstan" },
      { value: "LA", label: "Lao People's Democratic Republic" },
      { value: "LV", label: "Latvia" },
      { value: "LB", label: "Lebanon" },
      { value: "LS", label: "Lesotho" },
      { value: "LR", label: "Liberia" },
      { value: "LY", label: "Libya" },
      { value: "LI", label: "Liechtenstein" },
      { value: "LT", label: "Lithuania" },
      { value: "LU", label: "Luxembourg" },
      { value: "MO", label: "Macao" },
      { value: "MK", label: "Macedonia, the former Yugoslav Republic of" },
      { value: "MG", label: "Madagascar" },
      { value: "MW", label: "Malawi" },
      { value: "MY", label: "Malaysia" },
      { value: "MV", label: "Maldives" },
      { value: "ML", label: "Mali" },
      { value: "MT", label: "Malta" },
      { value: "MH", label: "Marshall Islands" },
      { value: "MQ", label: "Martinique" },
      { value: "MR", label: "Mauritania" },
      { value: "MU", label: "Mauritius" },
      { value: "YT", label: "Mayotte" },
      { value: "MX", label: "Mexico" },
      { value: "FM", label: "Micronesia, Federated States of" },
      { value: "MD", label: "Moldova, Republic of" },
      { value: "MC", label: "Monaco" },
      { value: "MN", label: "Mongolia" },
      { value: "ME", label: "Montenegro" },
      { value: "MS", label: "Montserrat" },
      { value: "MA", label: "Morocco" },
      { value: "MZ", label: "Mozambique" },
      { value: "MM", label: "Myanmar" },
      { value: "NA", label: "Namibia" },
      { value: "NR", label: "Nauru" },
      { value: "NP", label: "Nepal" },
      { value: "NL", label: "Netherlands" },
      { value: "NC", label: "New Caledonia" },
      { value: "NZ", label: "New Zealand" },
      { value: "NI", label: "Nicaragua" },
      { value: "NE", label: "Niger" },
      { value: "NG", label: "Nigeria" },
      { value: "NU", label: "Niue" },
      { value: "NF", label: "Norfolk Island" },
      { value: "MP", label: "Northern Mariana Islands" },
      { value: "NO", label: "Norway" },
      { value: "OM", label: "Oman" },
      { value: "PK", label: "Pakistan" },
      { value: "PW", label: "Palau" },
      { value: "PS", label: "Palestine, State of" },
      { value: "PA", label: "Panama" },
      { value: "PG", label: "Papua New Guinea" },
      { value: "PY", label: "Paraguay" },
      { value: "PE", label: "Peru" },
      { value: "PH", label: "Philippines" },
      { value: "PN", label: "Pitcairn" },
      { value: "PL", label: "Poland" },
      { value: "PT", label: "Portugal" },
      { value: "PR", label: "Puerto Rico" },
      { value: "QA", label: "Qatar" },
      { value: "RE", label: "Réunion" },
      { value: "RO", label: "Romania" },
      { value: "RU", label: "Russian Federation" },
      { value: "RW", label: "Rwanda" },
      { value: "BL", label: "Saint Barthélemy" },
      { value: "SH", label: "Saint Helena, Ascension and Tristan da Cunha" },
      { value: "KN", label: "Saint Kitts and Nevis" },
      { value: "LC", label: "Saint Lucia" },
      { value: "MF", label: "Saint Martin (French part)" },
      { value: "PM", label: "Saint Pierre and Miquelon" },
      { value: "VC", label: "Saint Vincent and the Grenadines" },
      { value: "WS", label: "Samoa" },
      { value: "SM", label: "San Marino" },
      { value: "ST", label: "Sao Tome and Principe" },
      { value: "SA", label: "Saudi Arabia" },
      { value: "SN", label: "Senegal" },
      { value: "RS", label: "Serbia" },
      { value: "SC", label: "Seychelles" },
      { value: "SL", label: "Sierra Leone" },
      { value: "SG", label: "Singapore" },
      { value: "SX", label: "Sint Maarten (Dutch part)" },
      { value: "SK", label: "Slovakia" },
      { value: "SI", label: "Slovenia" },
      { value: "SB", label: "Solomon Islands" },
      { value: "SO", label: "Somalia" },
      { value: "ZA", label: "South Africa" },
      { value: "GS", label: "South Georgia and the South Sandwich Islands" },
      { value: "SS", label: "South Sudan" },
      { value: "ES", label: "Spain" },
      { value: "LK", label: "Sri Lanka" },
      { value: "SD", label: "Sudan" },
      { value: "SR", label: "Suriname" },
      { value: "SJ", label: "Svalbard and Jan Mayen" },
      { value: "SE", label: "Sweden" },
      { value: "CH", label: "Switzerland" },
      { value: "SY", label: "Syrian Arab Republic" },
      { value: "TW", label: "Taiwan, Province of China" },
      { value: "TJ", label: "Tajikistan" },
      { value: "TZ", label: "Tanzania, United Republic of" },
      { value: "TH", label: "Thailand" },
      { value: "TL", label: "Timor-Leste" },
      { value: "TG", label: "Togo" },
      { value: "TK", label: "Tokelau" },
      { value: "TO", label: "Tonga" },
      { value: "TT", label: "Trinidad and Tobago" },
      { value: "TN", label: "Tunisia" },
      { value: "TR", label: "Turkey" },
      { value: "TM", label: "Turkmenistan" },
      { value: "TC", label: "Turks and Caicos Islands" },
      { value: "TV", label: "Tuvalu" },
      { value: "UG", label: "Uganda" },
      { value: "UA", label: "Ukraine" },
      { value: "AE", label: "United Arab Emirates" },
      { value: "GB", label: "United Kingdom" },
      { value: "US", label: "United States" },
      { value: "UM", label: "United States Minor Outlying Islands" },
      { value: "UY", label: "Uruguay" },
      { value: "UZ", label: "Uzbekistan" },
      { value: "VU", label: "Vanuatu" },
      { value: "VE", label: "Venezuela, Bolivarian Republic of" },
      { value: "VN", label: "Viet Nam" },
      { value: "VG", label: "Virgin Islands, British" },
      { value: "VI", label: "Virgin Islands, U.S." },
      { value: "WF", label: "Wallis and Futuna" },
      { value: "EH", label: "Western Sahara" },
      { value: "YE", label: "Yemen" },
      { value: "ZM", label: "Zambia" },
      { value: "ZW", label: "Zimbabwe" }
    ];
  };

  const handleSave = () => {
    // Validate address fields
    if (!editedAddress.street.trim()) {
      onError('Street address is required');
      return;
    }
    
    if (!editedAddress.city.trim()) {
      onError('City is required');
      return;
    }
    
    if (!editedAddress.state.trim()) {
      onError('State/Province is required');
      return;
    }
    
    if (!editedAddress.zipCode.trim()) {
      onError('ZIP/Postal code is required');
      return;
    }
    
    if (!editedAddress.country.trim()) {
      onError('Country is required');
      return;
    }

    onSaveAddress(editedAddress);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedAddress(addressInfo);
    setIsEditing(false);
  };

  return (
    <div className="border-t pt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        Address Information
      </h3>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Street Address *
            </label>
            <input
              type="text"
              value={editedAddress.street}
              onChange={(e) => setEditedAddress({...editedAddress, street: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="123 Main Street, Apt 4B"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                value={editedAddress.city}
                onChange={(e) => setEditedAddress({...editedAddress, city: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="New York"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State/Province *
              </label>
              <input
                type="text"
                value={editedAddress.state}
                onChange={(e) => setEditedAddress({...editedAddress, state: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="NY"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP/Postal Code *
              </label>
              <input
                type="text"
                value={editedAddress.zipCode}
                onChange={(e) => setEditedAddress({...editedAddress, zipCode: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="10001"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <select
                value={editedAddress.country}
                onChange={(e) => setEditedAddress({...editedAddress, country: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Select Country</option>
                {generateCountryOptions().map((country) => (
                  <option key={country.value} value={country.label}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-800 text-sm">
              💾 Your address will be saved securely and can be used for faster checkout.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Address
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="text-gray-900 font-medium">{addressInfo.street}</p>
                <p className="text-sm text-gray-500">
                  {addressInfo.city}, {addressInfo.state} {addressInfo.zipCode}
                </p>
                <p className="text-sm text-gray-500">{addressInfo.country}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-400 hover:text-orange-600 transition-colors"
              title="Edit address"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-green-800 text-sm font-medium">
              ✅ Address saved and ready for checkout
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
