import { Modal } from "@/components/ui/modal";
import { userCvsView } from "@/services/user-cvs";
import { CvViewProps, UserCvsEntity } from "@/entities/user-cvs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import UserCvsMetaCard from "../user-cvs-card/UserCvsMetaCard";

const CvEdit = ({ publicUid, onClose }: CvViewProps & { onClose: () => void }) => {
    const [cv, setCv] = useState<UserCvsEntity | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchCv = async () => {
            setIsLoading(true);
            const response = await userCvsView({ publicUid: publicUid });
            if (response.success) {
                setCv(response.data);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                toast.error(response.error || 'Failed to fetch data');
            }
        }
        fetchCv();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [publicUid]);

    const handleSave = () => {
        console.log('Saving changes...');
        onClose();
    }

    return (
        <Modal isOpen={true} onClose={onClose} className="max-w-[700px] m-4">
            <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
            <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar scrollbar-thin max-h-[700px]">
            {isLoading ? (
                <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
                </div>
            ) : (
            <UserCvsMetaCard
                publicUid={publicUid}
                name={cv?.nama || "N/A"}
                gender={cv?.gender || "N/A"}
                statusMenikah={cv?.statusMenikah || "N/A"}
                fotoBlurred={"/images/user/owner.jpg"}
            />
            )}
            </div>
            <div className="flex flex-col gap-2 mt-4"></div>
            <form className="flex flex-col">
                <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                <div className="mt-7">
                    <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                    Personal Information
                    </h5>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div className="col-span-2 lg:col-span-1">
                        <Label>Display Name</Label>
                        <Input type="text" value={cv?.displayName || "N/A"} />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <Label>CV Publish State</Label>
                        <Input type="text" value={cv?.cvPublishState || "N/A"} />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <Label>CV Publish Expiry</Label>
                        <Input type="text" value={cv?.cvPublishExpiry || "N/A"} />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <Label>CV Pending Expiry</Label>
                        <Input type="text" value={cv?.cvPendingExpiry || "N/A"} />
                    </div>

                    <div className="col-span-2">
                        <Label>CV Unpublished Reason</Label>
                        <Input type="text" value={cv?.cvUnpublishedReason || "N/A"} />
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                <Button size="sm" variant="outline" onClick={onClose}>
                    Close
                </Button>
                <Button size="sm" onClick={handleSave}>
                    Save Changes
                </Button>
                </div>
            </form>
            </div>
        </Modal>
    );
};

export default CvEdit;