import bcrypt from 'bcrypt';

function hashPassword(password, salt) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, salt, function(err, hash) {
            if(err) {
                reject(err);
            } else {
                resolve(hash);
            }
        })
    });
}

function comparePassword(password, passwordHash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, function(err, res) {
            if(err) {
                reject(err);
            }  else{
                resolve(res);
            }
        });
    });
}

export {
	hashPassword,
	comparePassword
}