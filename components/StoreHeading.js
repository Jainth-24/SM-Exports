import { PageTitle } from "./Title";

function StoreHeading() {
    return (
        <div className="mt-12">
            <PageTitle className="text-center mx-auto" type="heavy">
                Grab you product now
            </PageTitle>

            <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
                Times are tough. Liven up your home with some cute Doggy
                Stickers. 
            </p>
        </div>
    );
}

export default StoreHeading;
