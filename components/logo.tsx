import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTerminal } from '@fortawesome/free-solid-svg-icons'
const Logo = () => {
  return (
    <div className="logo-container inline-block rounded-tl-xl rounded-br-xl p-2">
      <FontAwesomeIcon className="logo w-10 inline-block" icon={faTerminal} /> 
    </div>)
}
export default Logo
