import { useEffect, useState } from "react";
import { Image as ImageIcon, X, Maximize2 } from "lucide-react";

export default function ImagePreview({ file, setFile }) {

  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {

    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(file);

    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };

  }, [file]);


  if (!file || !previewUrl) {
    return null;
  }


  function removeImage(e) {

    e.stopPropagation();

    if (setFile) {
      setFile(null);
    }

  }


  return (

    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">

            <ImageIcon size={20} />

          </div>

          <div>

            <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
              Selected Image
            </h3>

            <p className="max-w-[180px] truncate text-xs text-gray-500 sm:max-w-xs">
              {file.name}
            </p>

          </div>

        </div>


        {/* Remove button */}

        <button
          type="button"
          onClick={removeImage}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            text-gray-400
            transition
            hover:bg-red-50
            hover:text-red-600
          "
          title="Remove image"
        >

          <X size={20} />

        </button>

      </div>


      {/* Image */}

      <div className="relative bg-gray-100 p-4 sm:p-6">

        <div className="group relative mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-sm">

          <img
            src={previewUrl}
            alt="Selected cattle"
            className="
              max-h-[420px]
              min-h-[220px]
              w-full
              object-contain
              transition
              duration-500
              group-hover:scale-[1.01]
            "
          />


          {/* Image overlay */}

          <div className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-transparent
            opacity-0
            transition
            duration-300
            group-hover:opacity-100
          " />

        </div>

      </div>


      {/* Footer */}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 px-5 py-4 sm:px-6">

        <div className="flex items-center gap-2 text-sm text-gray-500">

          <span className="h-2 w-2 rounded-full bg-green-500" />

          Ready for analysis

        </div>


        <div className="flex items-center gap-2 text-xs text-gray-400">

          <Maximize2 size={14} />

          Image preview

        </div>

      </div>

    </div>

  );
}