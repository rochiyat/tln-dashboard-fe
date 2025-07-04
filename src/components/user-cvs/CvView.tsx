import { Modal } from "@/components/ui/modal";
import { userCvsView } from "@/services/user-cvs";
import { CvViewProps, UserCvsEntity } from "@/entities/user-cvs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserCvsMetaCard from "../user-cvs-card/UserCvsMetaCard";
import UserCvsInfoCard from "../user-cvs-card/UserCvsInfoCard";

const CvView = ({ publicUid, onClose }: CvViewProps & { onClose: () => void }) => {
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
    }, [publicUid]);

    return (
        <Modal isOpen={true} onClose={onClose} className="max-w-[700px] p-6 lg:p-10">
        <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
            {isLoading ? (
                <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
                </div>
            ) : (
                <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar scrollbar-thin max-h-[700px]">
                    <UserCvsMetaCard
                        publicUid={publicUid}
                        name={cv?.nama || "N/A"}
                        gender={cv?.gender || "N/A"}
                        statusMenikah={cv?.statusMenikah || "N/A"}
                        fotoBlurred={"/images/user/owner.jpg"}
                    />
                    <div className="flex flex-col gap-2 mt-4">
                    <UserCvsInfoCard
                        displayName={cv?.displayName || "N/A"}
                        applyCount={cv?.applyCount || 0}
                        beratBadan={cv?.beratBadan || "N/A"}
                        celanaDiatasMataKaki={cv?.celanaDiatasMataKaki || "N/A"}
                        ciriFisikCatatan={cv?.ciriFisikCatatan || "N/A"}
                        ciriFisikJenggot={cv?.ciriFisikJenggot || "N/A"}
                        ciriFisikJenisRambut={cv?.ciriFisikJenisRambut || "N/A"}
                        ciriFisikPanjangRambut={cv?.ciriFisikPanjangRambut || "N/A"}
                        ciriFisikWajah={cv?.ciriFisikWajah || "N/A"}
                        ciriFisikWarnaKulit={cv?.ciriFisikWarnaKulit || "N/A"}
                        ciriFisikWarnaRambut={cv?.ciriFisikWarnaRambut || "N/A"}
                        ciriFisikByAdmin={cv?.ciriFisikByAdmin || "N/A"}
                    />
                    </div>
                </div>
            )}
        </div>
        </Modal>
    );
};

export default CvView;