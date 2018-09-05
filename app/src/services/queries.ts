export const getPlayerWithName = 'SELECT name, id, password FROM player WHERE name = $1::text'
export const addPlayer = 'INSERT INTO player VALUES ($1::text, $2::text)'
export const getAllPlayersExcept = `
	SELECT name, id
	FROM player
	WHERE is_deleted = false AND NOT id = $1::int`
