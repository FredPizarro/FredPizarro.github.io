/*
 * Nube de descripcion al hacer click sobre las imagenes de los modales.
 * Datos: clase ModalDescriptions (assets/data/ModalDescriptions.js)
 * id de imagen = atributo id, data-desc-id o nombre del archivo sin extension.
 */
(function () {
	var cloud = document.createElement('div');
	cloud.className = 'img-cloud';
	document.body.appendChild(cloud);

	function imgId(img) {
		if (img.id) return img.id;
		if (img.dataset.descId) return img.dataset.descId;
		var file = decodeURIComponent(img.getAttribute('src').split('/').pop());
		return file.replace(/\.[^.]+$/, '');
	}

	function lookup(img) {
		var modal = img.closest('.modal');
		return modal ? ModalDescriptions.get(modal.id, imgId(img)) : null;
	}

	/* la nube sale hacia el borde de la imagen mas cercano al click; la flecha apunta al click */
	function place(e, img) {
		var gap = 12, edge = 4, arrow = 16;
		var vw = window.innerWidth, vh = window.innerHeight;
		var space = {
			top: e.clientY - edge,
			bottom: vh - e.clientY - edge,
			right: vw - e.clientX - edge,
			left: e.clientX - edge
		};
		/* borde de la imagen mas cercano al click = lado donde sale la nube */
		var r = img.getBoundingClientRect();
		var dist = {
			left: (e.clientX - r.left) / r.width,
			right: (r.right - e.clientX) / r.width,
			top: (e.clientY - r.top) / r.height,
			bottom: (r.bottom - e.clientY) / r.height
		};
		var order = Object.keys(dist).sort(function (a, b) { return dist[a] - dist[b]; });

		/* si el lado pedido es izquierda/derecha y falta ancho, la nube se angosta para entrar */
		var MAX_W = 320, MIN_W = 160;
		cloud.style.left = '0px';
		cloud.style.top = '0px';
		cloud.style.maxWidth = MAX_W + 'px';
		if (order[0] === 'left' || order[0] === 'right') {
			var avail = space[order[0]] - gap;
			cloud.style.maxWidth = Math.max(MIN_W, Math.min(MAX_W, avail)) + 'px';
		}
		var w = cloud.offsetWidth, h = cloud.offsetHeight;
		var need = { top: h + gap, bottom: h + gap, right: w + gap, left: w + gap };
		var side = order.filter(function (s) {
			return space[s] >= need[s];
		})[0];
		if (!side) {
			side = Object.keys(space).sort(function (a, b) {
				return space[b] / need[b] - space[a] / need[a];
			})[0];
		}

		var clamp = function (v, min, max) { return Math.min(Math.max(min, v), Math.max(min, max)); };
		/* el click es el origen: la flecha queda en la esquina inferior (o izquierda) de la nube y apunta al click */
		var corner = 28;
		var left, top;
		if (side === 'top' || side === 'bottom') {
			left = clamp(e.clientX - corner, edge, vw - w - edge);
			top = side === 'top' ? e.clientY - h - gap : e.clientY + gap;
			cloud.style.setProperty('--arrow-x', clamp(e.clientX - left, arrow, w - arrow) + 'px');
		} else {
			top = clamp(e.clientY - h + corner, edge, vh - h - edge);
			left = side === 'left' ? e.clientX - w - gap : e.clientX + gap;
			cloud.style.setProperty('--arrow-y', clamp(e.clientY - top, arrow, h - arrow) + 'px');
		}
		cloud.classList.remove('at-top', 'at-bottom', 'at-left', 'at-right');
		cloud.classList.add('at-' + side);
		cloud.style.left = Math.max(edge, left) + 'px';
		cloud.style.top = Math.max(edge, top) + 'px';
	}

	var current = null;

	function hide() {
		cloud.classList.remove('show');
		current = null;
	}

	document.addEventListener('click', function (e) {
		var img = e.target.closest && e.target.closest('.modal-body img');
		if (!img) { hide(); return; }
		if (img === current) { hide(); return; }
		var info = lookup(img);
		if (!info) { hide(); return; }
		cloud.innerHTML = '';
		if (info.title) {
			var t = document.createElement('strong');
			t.textContent = info.title;
			cloud.appendChild(t);
		}
		var p = document.createElement('p');
		p.textContent = info.text || '';
		cloud.appendChild(p);
		cloud.classList.add('show');
		current = img;
		place(e, img);
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') hide();
	});
})();
