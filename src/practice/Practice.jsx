import { useState } from "react";

export default function ConditionalRenderingPractice() {
  const [profile, setProfile] = useState(false);
  const [viewMessage, setViewMessage] = useState(true);

  // Element Variable

  let context;

  if (!profile) {
    context = <p>Please Register your profile with proper details</p>
  } else {
    context = <p>Please check and provide valid details</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-600 ml-3">Conditional Rendering Practice</h2>

      {/* Element Variable Method */}

      <div className="bg-gray-100 p-3 rounded-lg w-2xl text-center mx-auto mb-3">{context}</div>

      {/* If else example, used IIFE function inside div */}

      <div className="bg-gray-100 p-3 rounded-lg w-2xl text-center mx-auto mb-3">
        {
          (() => {
            if (profile) {
              return <p>Your profile has been successfully registered</p>
            } else {
              return <p>Please register again with valid details</p>
            }
          }
          )()
        }
      </div>

      {/* Ternary Operator */}

      <div className="bg-gray-100 p-3 rounded-lg w-2xl text-center mx-auto mb-3">
        {
          profile ? <p>Registered Successfully (Ternary)</p> : <p>Please Register again (Ternary)</p>
        }
      </div>

      {/* short circuit operator */}

      <div className="bg-gray-100 p-3 rounded-lg w-2xl text-center mx-auto mb-3">
        {
          viewMessage && <p>This message can be viewed only if it is true</p>
        }
      </div>

      {/* when state changes */}
      <div className="flex justify-center gap-4">
        <button className="bg-indigo-400 px-4 py-2 text-white rounded-md hover:bg-indigo-700 transition" onClick={() => { setProfile(!profile) }}>
          {profile ? "Register again" : "Registered Successfully"}</button>
        <button className="bg-indigo-400 px-4 py-2 text-white rounded-md hover:bg-indigo-700 transition" onClick={() => { setViewMessage(!viewMessage) }}>
          ToggleMessage</button>
      </div>
    </div>
  )

}