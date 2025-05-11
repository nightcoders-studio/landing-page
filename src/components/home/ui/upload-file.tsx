import { useState, useRef, ChangeEvent, DragEvent } from 'react'

interface FileUploaderProps {
  initialFile?: File | null
  onFileChange?: (file: File | null) => void
}

const FileUploader: React.FC<FileUploaderProps> = ({ initialFile = null, onFileChange }) => {
  const [file, setFile] = useState<File | null>(initialFile)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      onFileChange?.(selectedFile)
    }
  }

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      setFile(droppedFile)
      onFileChange?.(droppedFile)
    }
  }

  const removeFile = () => {
    setFile(null)
    onFileChange?.(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Function to format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Function to get file icon based on type
  const getFileIcon = (fileType: string | undefined): string => {
    if (!fileType) return '📄'

    if (fileType.startsWith('image/')) return '🖼️'
    if (fileType.startsWith('video/')) return '🎬'
    if (fileType.startsWith('audio/')) return '🎵'
    if (fileType.includes('pdf')) return '📕'
    if (fileType.includes('word') || fileType.includes('document')) return '📝'
    if (fileType.includes('excel') || fileType.includes('sheet')) return '📊'
    if (fileType.includes('zip') || fileType.includes('compressed')) return '🗜️'

    return '📄'
  }

  return (
    <div className="w-full">
      {!file ? (
        <div
          className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${
            isDragging ? 'border-brand bg-brand/5' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-1 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">Any file up to 10MB</p>
          </div>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-xl">
          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-gray-100 rounded-lg mr-4">
            <span className="text-2xl">{getFileIcon(file.type)}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
            <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
          </div>
          <div className="flex-shrink-0 ml-4">
            <button
              type="button"
              className="inline-flex items-center p-1.5 border border-transparent rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                removeFile()
              }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FileUploader
