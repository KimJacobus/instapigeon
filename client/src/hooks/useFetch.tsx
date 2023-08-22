import { useState, useEffect } from "react"

type FetchOptions = {
  method: string
  headers: {
    "Content-Type": string
  }
  body: string
}
// set method default as GET
export const useFetch = (url: string, method: string = "GET") => {
  const [data, setData] = useState<any>(null)
  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)
  const [options, setOptions] = useState<any>(null)

  const postData = (postData: object) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
  }

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (fetchOptions?: FetchOptions) => {
      setIsPending(true)

      try {
        //spread fetchOptions here, if GET request, fetchOptions is empty
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        })
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError("Could not fetch the data")
        }
      }
    }

    // if GET, go ahead and fetch the data
    if (method === "GET") {
      fetchData()
    }
    // if POST, check if options are present
    if (method === "POST" && options) {
      fetchData(options)
    }

    return () => {
      controller.abort()
    }
  }, [url, options, method])

  return { data, isPending, error, postData }
}
