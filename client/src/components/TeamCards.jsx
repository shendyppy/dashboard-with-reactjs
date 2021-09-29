import { useHistory } from "react-router-dom";

function TeamCard({ team }) {
  const history = useHistory();

  const goToDetail = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <>
      <div
        class="card text-center shadow-2xl m-3"
        style={{ borderWidth: 2, borderColor: "#150050" }}
      >
        <figure class="px-10 pt-10">
          <img src={team.strTeamBadge} class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{team.strTeam}</h2>
          <p class="truncate text-xl">{team.strDescriptionEN}</p>
          <div class="justify-center card-actions">
            <button
              class="btn btn-outline btn-accent"
              onClick={() => {
                goToDetail(team.idTeam);
              }}
            >
              More info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
