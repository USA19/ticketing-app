import TicketForm from "../{components}/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/ticket/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = { foundTicket: false };
const TicketPage = async ({ params: { id } = {} }) => {
  const EDITMODE = id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = (await getTicketById(id))?.ticket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;