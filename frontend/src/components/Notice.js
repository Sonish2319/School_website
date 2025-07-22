export default function Notice() {
    return (
      <div className="fixed w-full h-[64.16px] mt-0">
        <div className=" w-full h-full">
          {/* Full-width transparent background with shadow */}
          <div
            className="absolute inset-0 rounded"
            style={{
              background: 'transparent',
              boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.25)', // #00000040
            }}
          />
  
          {/* Left "Notices" label */}
          <div
            className="relative z-10 flex items-center justify-center"
            style={{
              width: '187.22px',
              height: '64.16px',
              padding: '16px 54px',
              backgroundColor: '#2F2F7E',
            }}
          >
            <h2
              className="font-[Acumin Pro] uppercase text-white font-bold"
              style={{
                fontSize: '22px',
                lineHeight: '150%',
              }}
            >
              Notices
            </h2>
          </div>
        </div>
      </div>
    );
  }
  