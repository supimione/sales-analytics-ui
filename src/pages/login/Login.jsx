/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Hi, Welcome</h1>

            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <label className="text-sm">Email Address</label>
                <input
                  name="email"
                  type="text"
                  autoComplete="off"
                  className="w-full text-sm border-b-2 mt-0 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                />
                <label className="text-sm">Password</label>
                <input
                  name="password"
                  type="password"
                  className="w-full text-sm border-b-2 mt-0 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                />
                <div className="text-right">
                  <button className="bg-cyan-500 text-white rounded-md px-5 py-2 mt-5 text-sm float-right">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
