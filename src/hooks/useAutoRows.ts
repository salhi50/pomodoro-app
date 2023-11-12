import * as React from "react"

const useAutoRows = (textareaRef: React.MutableRefObject<HTMLTextAreaElement | null>) => {
  React.useEffect(() => {
    const textarea = textareaRef.current

    function updateHeight() {
      if(textarea) {
        // reset height to default
        textarea.style.height = "auto"
        // set new height
        textarea.style.height = (
          textarea.scrollHeight +
          parseInt(window.getComputedStyle(textarea).borderTopWidth,10) +
          parseInt(window.getComputedStyle(textarea).borderBottomWidth,10)
        ) + "px"
      }
    }

    if(textarea) {
      updateHeight()
      textarea.addEventListener("input", updateHeight)
    }

    return () => textarea?.removeEventListener("input", updateHeight)
  }, [textareaRef])
}

export default useAutoRows