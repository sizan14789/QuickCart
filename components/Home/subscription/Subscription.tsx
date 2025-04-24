import SubscriptionForm from "./SubscriptionForm";

const Subscription = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 justify-center">
        <div className=" flex flex-col gap-3">
          <h2 className="text-4xl font-medium text-center">
            Subscribe now & get 20% off
          </h2>
          <p className="text-gray-400 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <SubscriptionForm />
      </div>
    </div>
  );
};

export default Subscription;
