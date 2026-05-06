import { submitLead } from './actions'

export default function Home() {
  return (
    <div className="min-h-full flex items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-zinc-900">문의하기</h1>
            <p className="mt-1 text-sm text-zinc-500">
              정보를 입력하시면 빠르게 연락드리겠습니다.
            </p>
          </div>

          <form action={submitLead} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-zinc-700">
                이름
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="홍길동"
                required
                className="w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="hello@example.com"
                required
                className="w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-zinc-700">
                전화번호
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="010-0000-0000"
                required
                className="w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              제출하기
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
