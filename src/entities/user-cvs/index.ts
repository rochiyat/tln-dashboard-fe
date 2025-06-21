export interface UserCvsEntity {
    id: number | null;
    userId: number | null;
    firestoreDocId: string | null;
    nama: string | null;
    displayName: string | null;
    applyCount: number | null;
    beratBadan: string | null;
    celanaDiatasMataKaki: string | null;
    ciriFisikCatatan: string | null;
    ciriFisikJenggot: string | null;
    ciriFisikJenisRambut: string | null;
    ciriFisikPanjangRambut: string | null;
    ciriFisikWajah: string | null;
    ciriFisikWarnaKulit: string | null;
    ciriFisikWarnaRambut: string | null;
    ciriFisikByAdmin: string | null;
    cvPendingExpiry: number | null;
    cvPublishExpiry: number | null;
    cvPublishState: string | null;
    hasFirstPublished: number | null;
    cvUnpublishedReason: string | null;
    referralId: string | null;
    daerahAsal: string | null;
    originCityId: string | null;
    originProvinceId: string | null;
    domisili: string | null;
    domicileCityId: string | null;
    domicileProvinceId: string | null;
    domicileLatitude: string | null;
    domicileLongitude: string | null;
    foto: string | null;
    fotoBlurred: string | null;
    fotoKtp: string | null;
    akteCerai: string | null;
    gender: string | null;
    hasUnreadMessage: number | null;
    hobi: string | null;
    isAdminApproved: number | null;
    jumlahAnak: string | null;
    jumlahHafalanQuran: string | null;
    karakterDanSifat: string | null;
    parentPermission: string | null;
    kelompokNgaji: string | null;
    kriteriaDomisili: string | null;
    kriteriaLainnya: string | null;
    kriteriaPekerjaan: string | null;
    kriteriaUmurAkhir: string | null;
    kriteriaUmurAwal: string | null;
    lastUpdated: string | null;
    lastSessionActive: string | null;
    membershipState: string | null;
    vipStartDate: string | null;
    vipEndDate: string | null;
    menikahDenganPriaBeristri: string | null;
    merokok: string | null;
    panjangJilbab: string | null;
    pekerjaan: string | null;
    phone: string | null;
    publicUid: string | null;
    role: string | null;
    statusMenikah: string | null;
    suku: string | null;
    targetMenikah: string | null;
    tempatLahir: string | null;
    tglLahir: string | null;
    tinggiBadan: string | null;
    uid: string | null;
    viewCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  }

export interface CvViewProps {
  publicUid: string;
}

export interface UserMetaCardProps {
  publicUid: string;
  fotoBlurred: string;
  name: string;
  gender: string;
  statusMenikah: string;
}

export interface UserCvsInfoCardProps {
  displayName: string | null;
  applyCount: number | null;
  beratBadan: string | null;
  celanaDiatasMataKaki: string | null;
  ciriFisikCatatan: string | null;
  ciriFisikJenggot: string | null;
  ciriFisikJenisRambut: string | null;
  ciriFisikPanjangRambut: string | null;
  ciriFisikWajah: string | null;
  ciriFisikWarnaKulit: string | null;
  ciriFisikWarnaRambut: string | null;
  ciriFisikByAdmin: string | null;
}
