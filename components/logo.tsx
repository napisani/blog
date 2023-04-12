import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTerminal } from '@fortawesome/free-solid-svg-icons'
const Logo = () => {
  return (
    <div className="inline-block rounded-tl-xl rounded-br-xl bg-gunmetal p-2">
      <FontAwesomeIcon className="w-10 inline-block text-secondary" icon={faTerminal} /> 
    </div>)
}
export default Logo
