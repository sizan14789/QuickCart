const SubscriptionForm = () => {
  return (
    <div className="flex w-full justify-center">
      <input
        type="email"
        name="email"
        placeholder="Enter your email id"
        className="outline-0 max-w-2xl border-1 border-stone-300 px-3 rounded-l-md w-full"
      />
      <button className="bg-orange-600 px-12 py-4 rounded-r-md text-white hover:brightness-90 cursor-pointer">
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionForm;
